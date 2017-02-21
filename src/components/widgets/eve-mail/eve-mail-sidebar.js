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
        <button className="eve-mail-buttons" onClick={this.clickRefresh.bind(this)}>Refresh</button>
        <button className="eve-mail-buttons" onClick={this.clickCompose.bind(this)}>Compose</button>
        <button className="eve-mail-buttons" onClick={this.clickSpecificMailList.bind(this, 'mailHeadersInbox')}>Inbox</button>
        <button className="eve-mail-buttons" onClick={this.clickSpecificMailList.bind(this, 'mailHeadersPersonal')}>Personal</button>
        <button className="eve-mail-buttons" onClick={this.clickSpecificMailList.bind(this, 'mailHeadersAlliance')}>Alliance</button>
        <button className="eve-mail-buttons" onClick={this.clickSpecificMailList.bind(this, 'mailHeadersCorporation')}>Corporation</button>
        <button className="eve-mail-buttons" onClick={this.clickSpecificMailList.bind(this, 'mailHeadersSent')}>Sent</button>
        <button className="eve-mail-buttons">Trash</button>
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
