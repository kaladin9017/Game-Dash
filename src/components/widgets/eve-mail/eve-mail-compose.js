import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {eveMailAuxWindowDisplayChange, eveMailRemoveComposeSendArray} from '../../../actions/eve-mail';
import EveNameSearch from './eve-mail-name-search';
import axios from 'axios';

class Compose extends Component {
  constructor() {
    super();
    this.state = {
      subject: '',
      body: ''
    };
  }
  updateSubject(e) {
    this.setState({subject: e.currentTarget.value});
  }
  updateBody(e) {
    this.setState({body: e.currentTarget.value});
  }
  clickBack() {
    this.props.eveMailAuxWindowDisplayChange(null);
  }
  removeSender(ind, event) {
    event.preventDefault();
    this.props.eveMailRemoveComposeSendArray(ind, this.props.eveMail.composeSendArray);
  }
  sendMail() {
    let url = 'https://esi.tech.ccp.is/latest/characters/' + this.props.eveMail.characterId + '/mail/?datasource=tranquility';
    let accessToken = 'Bearer ' + this.props.eveMail.accessToken;
    let recipientsArray = [];
    this.props.eveMail.composeSendArray.forEach((ele) => {
      let newRecipient = {"recipient_id": ele.character_id, "recipient_type": "character" };
      recipientsArray.push(newRecipient);
    });
    let body = this.state.body;
    let subject = this.state.subject;
    axios({
      "method": "post",
      "url": url,
      "headers": {
        "Authorization": accessToken,
        "Accept": 'application/json',
        "Content-Type": 'application/json'
      },
      data: {
        "approved_cost": 0,
        "body": body,
        "recipients": recipientsArray,
        "subject": subject
      }
    })
    .catch((err) => {

    });
  }
  render() {
    let sendList;

    if (this.props.eveMail.composeSendArray.length > 0) {

      let array = [];
      this.props.eveMail.composeSendArray.forEach((ele, ind) => {
        array.push(<button key={ind} onClick={this.removeSender.bind(this, ind)}>{ele.character_name}</button>);
      });
      sendList = (
        <div>
          {array}
        </div>
      );
    } else {
      sendList = null;
    }

    return (
      <div>
        <EveNameSearch/>
        Send to: {sendList}
        <br/>
        <form>
          <input type="text" placeholder="Subject" onChange={this.updateSubject.bind(this)}></input>
          <br/>
          <input type="text" placeholder="Body" onChange={this.updateBody.bind(this)}></input>
          <br/>
        </form>
        <button className="eve-mail-buttons" onClick={this.sendMail.bind(this)}>Send Mail</button>
        <button className="eve-mail-buttons" onClick={this.clickBack.bind(this)}>Back</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({eveMailAuxWindowDisplayChange, eveMailRemoveComposeSendArray}, dispatch);
}

function mapStateToProps(state, ownProps) {
  return {
    eveMail: state.eveMail
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Compose);
