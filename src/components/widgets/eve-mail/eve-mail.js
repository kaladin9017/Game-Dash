import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {eveMailFetchHeaders} from '../../../actions/eve-mail';
import axios from 'axios';
const EVE_PIC = require('../../../assets/eve-login.png');

class EveMail extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      screen: null
    };
  }
  handleClick(){
    let characterId = this.props.characterId;
    let accessToken = this.props.accessToken;
    this.props.eveMailFetchHeaders(characterId, accessToken);
  }
  render(){
    let screen;
    if (this.props.accessToken) {
      screen = (
        <div>
          <button onClick={this.handleClick.bind(this)}>
            Get Mail
          </button>
        </div>
      );
    } else {
      screen = (
        <div>
          <a href={this.props.authUrl}>
            <img src={EVE_PIC} />
          </a>
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
  return bindActionCreators({eveMailFetchHeaders}, dispatch);
}

function mapStateToProps(state, ownProps) {
  return {
    accessToken: state.eveMail.accessToken,
    authUrl: state.eveMail.authUrl,
    characterId: state.eveMail.characterId
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EveMail);
