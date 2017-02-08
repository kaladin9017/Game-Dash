import React, {Component} from 'react';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {eveMailGetMailBody} from '../../../actions/eve-mail';
import EveMailHeader from './eve-mail-header';
import EveMailItem from './eve-mail-item';

class EveMailHeaderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerList: null,
      mail: null,
      screen: null
    };
  }
  componentDidMount() {
    let headerList = [];
    this.props.mailHeaders.forEach((ele, ind) => {
      headerList.push(
        <EveMailHeader
          key={ind}
          header={ele}
          handleClick={this.handleClick.bind(this, this.props.characterId, this.props.accessToken, ele.mail_id, ele.from)}
        />
      );
    });
    this.setState({headerList: headerList});
    this.setState({screen: headerList});
  }
  backButton() {
    this.setState({mail: null});
  }
  handleClick(charId, accessToken, mailId, from) {
    let url = `https://esi.tech.ccp.is/latest/characters/${charId}/mail/${mailId}/?datasource=tranquility`;
    let authorization = `Bearer ${accessToken}`;
    axios({
      method: 'get',
      url: url,
      headers: {
        Authorization: authorization,
        Accept: 'application/json'
      }
    })
    .then((data) => {
      let newMail = (
        <EveMailItem
          subject={data.data.subject}
          from={from}
          body={data.data.body}
          backButton={this.backButton.bind(this)}
        />
      );
      this.setState({mail: newMail});
    });
  }
  render() {
    let display;
    if (this.state.mail) {
      display = this.state.mail;
    } else {
      display = this.state.headerList;
    }
    return (
      <div>
        {display}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({eveMailGetMailBody}, dispatch);
}

function mapStateToProps(state, ownProps) {
  return {
    authUrl: state.eveMail.authUrl,
    token: state.eveMail.token,
    characterId: state.eveMail.characterId,
    accessToken: state.eveMail.accessToken,
    refreshToken: state.eveMail.refreshToken,
    mailHeaders: state.eveMail.mailHeaders,
    updateStage: state.eveMail.updateStage
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EveMailHeaderList);
