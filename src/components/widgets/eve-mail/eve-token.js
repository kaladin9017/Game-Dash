import React, {Component} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {eveMailWriteTokens} from '../../../actions/eve-mail';
import {bindActionCreators} from 'redux';
import axios from 'axios';

class EveToken extends Component {
  componentDidMount(){

    let url = window.location.href;
    let authToken = url.slice(url.indexOf('=') + 1, url.indexOf('&'));
    this.props.eveMailWriteTokens(authToken);
    browserHistory.push('/eveMail');

    axios.post('/api/fetchAuthorizationCode', {
      token: this.state.token
    }).then((data) => {
      this.setState({authToken: data.data.access_token, refreshToken: data.data.refresh_token});
    })
    .catch((err) => {
      throw(err);
    });
  }
  handleClick(){


  }
  render(){
    return (
      <div>
        Loading...
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({eveMailWriteTokens}, dispatch);
}

export default connect(null, mapDispatchToProps)(EveToken);
