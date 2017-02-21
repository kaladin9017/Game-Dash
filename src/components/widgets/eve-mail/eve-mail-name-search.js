import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import axios from 'axios';
import {eveMailAddComposeSendArray} from '../../../actions/eve-mail';

class EveNameSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchName: '',
      validateIsBusy: false,
      rawCharacterList: null,
      sendList: []
    };
  }
  updateSearchName(e) {
    this.setState({searchName: e.currentTarget.value});
  }
  validateName(e) {
    e.preventDefault();
    if (this.state.validateIsBusy) {
      alert('Service is busy');
    } else {
      this.setState({validateIsBusy: true});
      let url = 'https://esi.tech.ccp.is/latest/search/?search=' + this.state.searchName + '&categories=character&language=en-us&strict=false&datasource=tranquility';

      axios({
        method: 'get',
        url: url,
        headers: {
          Accept: 'application/json'
        }
      })
      .then((data) => {
        let secondUrl = 'https://esi.tech.ccp.is/latest/characters/names/?character_ids=';
        let charIdArray = data.data.character;
        let idStr = '';
        charIdArray.forEach((ele, ind, arr) => {
          if (ind == arr.length -1) {
            idStr += ele;
          } else {
            idStr = idStr + ele + '%2C';
          }
        });
        secondUrl = secondUrl + idStr + '&datasource=tranquility';
        axios({
          method: "get",
          url: secondUrl,
          headers: {
            Accept: 'application/json'
          }
        })
        .then((data2) => {
          this.setState({validateIsBusy: false, rawCharacterList: data2.data});
        })
        .catch((err) => {
          this.setState({validateIsBusy: false});
        });
      });
    }
  }

  selectRawName(e) {
    let nameObj = {};
    nameObj.character_name = e.target.options[e.target.selectedIndex].text;
    nameObj.character_id = e.currentTarget.value;
    this.props.eveMailAddComposeSendArray(nameObj, this.props.composeSendArray);
  }

  render() {
    let select = null;
    if (this.state.rawCharacterList) {
      let optionArray = [];
      this.state.rawCharacterList.forEach((ele, ind) => {
        optionArray.push(<option key={ind} value={ele.character_id}>{ele.character_name}</option>);
      });
      select = (
        <div>
          Which name did you mean?
          <select onClick={this.selectRawName.bind(this)}>
            {optionArray}
          </select>
        </div>
      );
    }
    return (
      <div>
        <form onSubmit={this.validateName.bind(this)}>
          <input type="text" onChange={this.updateSearchName.bind(this)}></input>
          <input className="eve-mail-buttons" type="submit" value="Validate Name"/>
        </form>
        {select}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({eveMailAddComposeSendArray}, dispatch);
}

function mapStateToProps(state, ownProps) {
  return {
    composeSendArray: state.eveMail.composeSendArray
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EveNameSearch);
