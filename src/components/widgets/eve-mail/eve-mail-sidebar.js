import React, {Component} from 'react';
import {eveMailMailHeaderDisplayChange, eveMailAuxWindowDisplayChange, eveMailFetchHeaders} from '../../../actions/eve-mail';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class EveMailSidebar extends Component {
  constructor() {
    super();
  }
  clickRefresh() {
    let characterId = this.props.eveMail.characterId;
    let accessToken = this.props.eveMail.accessToken;
    this.props.eveMailFetchHeaders(characterId, accessToken, 2, true);
  }
  clickCompose() {
    this.props.eveMailAuxWindowDisplayChange('compose');
  }
  clickSpecificMailList(str) {
    this.props.eveMailMailHeaderDisplayChange(str);
    this.props.eveMailAuxWindowDisplayChange(null);
  }
  render() {
    return (
      <div>
        <button onClick={this.clickRefresh.bind(this)}>Refresh</button>
        <button onClick={this.clickCompose.bind(this)}>Compose</button>
        <button onClick={this.clickSpecificMailList.bind(this, 'mailHeadersInbox')}>Inbox</button>
        <button onClick={this.clickSpecificMailList.bind(this, 'mailHeadersPersonal')}>Personal</button>
        <button onClick={this.clickSpecificMailList.bind(this, 'mailHeadersAlliance')}>Alliance</button>
        <button onClick={this.clickSpecificMailList.bind(this, 'mailHeadersCorporation')}>Corporation</button>
        <button onClick={this.clickSpecificMailList.bind(this, 'mailHeadersSent')}>Sent</button>
        <button>Trash</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({eveMailMailHeaderDisplayChange, eveMailAuxWindowDisplayChange, eveMailFetchHeaders}, dispatch);
}

function mapStateToProps(state, ownProps) {
  return {
    eveMail: state.eveMail
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EveMailSidebar);
