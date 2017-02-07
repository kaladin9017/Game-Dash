import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {eveMailFetchHeaders, eveMailFetchCharacterNames} from '../../../actions/eve-mail';
import axios from 'axios';
const EVE_PIC = require('../../../assets/eve-login.png');

class EveMail extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      screen: null
    };
  }
  render(){
    let screen;
    if (this.props.updateStage == 0) {
      screen = (
        <div>
          <a href={this.props.authUrl}>
            <img src={EVE_PIC} />
          </a>
        </div>
      );
    }

    if (this.props.updateStage == 1) {
      let characterId = this.props.characterId;
      let accessToken = this.props.accessToken;
      this.props.eveMailFetchHeaders(characterId, accessToken, 2);
      screen = (
        <div>
          <p>{this.props.updateStage}</p>
        </div>
      );
    }

    if (this.props.updateStage == 2) {
      let mailHeaders = this.props.mailHeaders;
      this.props.eveMailFetchCharacterNames(mailHeaders, 3);
      screen = (
        <div>
          <p>{this.props.updateStage}</p>
        </div>
      );
    }

    if (this.props.updateStage == 3) {
      screen = (
        <div>
          <p>{this.props.updateStage}</p>
        </div>
      );
    }

    return (
      <div>
        {screen}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({eveMailFetchHeaders, eveMailFetchCharacterNames}, dispatch);
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

export default connect(mapStateToProps, mapDispatchToProps)(EveMail);
