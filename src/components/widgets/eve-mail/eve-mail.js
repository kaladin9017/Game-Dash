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
    let authToken = this.props.authToken;
    eveMailFetchHeaders(characterId, authToken);
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
        <div className="evediv">

          <center><h1>Log into your Eve-Mail account below:</h1></center>
          <hr id="evemailhr" />
          <br />

          <center>
            <div className="evemaillogin">
              <center>
                <a href={this.props.authUrl}><img src={EVE_PIC} /></a>
              </center>

              <h4 id="logininst">Click above for login</h4>
            </div>
          </center>

          <center>
            <div className="evemailfeatures">
                <center><p>Stand with the alliance</p></center>
                <br />
                <center><p>Communicate with the Corporation</p></center>
            </div>
          </center>

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
  return bindActionCreators({}, dispatch);
}

function mapStateToProps(state, ownProps) {
  return {
    accessToken: state.eveMail.accessToken,
    authUrl: state.eveMail.authUrl,
    characterId: state.eveMail.characterId
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EveMail);
