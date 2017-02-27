import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {eveMailFetchHeaders, eveMailFetchCharacterNames, eveMailSortMailHeaders, eveMailGetNewAccessTokenWithRefreshToken, eveMailWriteTokensFromLocalStorage} from '../../../actions/eve-mail';
import EveMailHeaderList from './eve-mail-header-list';
import EveMailSidebar from './eve-mail-sidebar';
const EVE_PIC = require('../../../assets/eve-login.png');

class EveMail extends Component {
  render() {
    let screen;

    if (JSON.parse(localStorage.getItem("tokens")) && this.props.updateStage == 0) {
      let tokens = JSON.parse(localStorage.getItem("tokens"));
      let currentTime = Date.now();
      if (tokens.accessTokenRefreshTime < currentTime) {
        this.props.eveMailGetNewAccessTokenWithRefreshToken(tokens.refreshToken, 1);
      } else {
        this.props.eveMailWriteTokensFromLocalStorage(tokens.accessToken, tokens.refreshToken, tokens.accessTokenRefreshTime, 1);
      }
    } else if (this.props.updateStage == 0) {
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
      this.props.eveMailFetchHeaders(characterId, accessToken, 2, true);
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
      this.props.eveMailSortMailHeaders(this.props.mailHeaders, 4);
      screen = (
        <div>
          <p>{this.props.updateStage}</p>
        </div>
      );
    }

    if (this.props.updateStage == 4) {
      screen = (
        <div>
          <EveMailHeaderList mailHeaders={this.props.mailHeaders} />
        </div>
      );
    }
    return (
      <div>
        <EveMailSidebar/>
        {screen}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({eveMailFetchHeaders, eveMailFetchCharacterNames, eveMailSortMailHeaders, eveMailGetNewAccessTokenWithRefreshToken, eveMailWriteTokensFromLocalStorage}, dispatch);
}

function mapStateToProps(state, ownProps) {
  return {
    authUrl: state.eveMail.authUrl,
    characterId: state.eveMail.characterId,
    accessToken: state.eveMail.accessToken,
    mailHeaders: state.eveMail.mailHeaders,
    updateStage: state.eveMail.updateStage
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EveMail);
