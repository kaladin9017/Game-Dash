import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {eveMailFetchHeaders} from '../../../actions';
import axios from 'axios';
const EVE_PIC = require('../../../assets/eve-login.png');

class EveToken extends Component {
  constructor(props){
    super(props);
    // let url = window.location.href;
    // let token = url.slice(url.indexOf('=') + 1, url.indexOf('&'));
    this.state = {
      screen: null
    };
  }

  render(){
    let screen = null;
    if (this.state.props) {
      console.log(this.state.props);
    }
  //   if (this.state.props) {
  //     screen = (
  //       <div>
  //         <a href={this.state.props.eveMail.authUrl}>
  //           <img src={EVE_PIC} />
  //         </a>
  //       </div>
  //     );
  //   } else {
  //     screen = null;
  //   }
    return (
      <div>
        {screen}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(eveMailFetchHeaders, dispatch);
}

function mapStateToProps(state) {
  return {eveMail: state.eveMail};
}

export default connect(mapStateToProps, mapDispatchToProps)(EveToken);
