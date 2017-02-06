import React, {Component} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {eveMailWriteTokens} from '../../../actions';
import {bindActionCreators} from 'redux';

class EveToken extends Component {
  componentDidMount(){
    let url = window.location.href;
    let authToken = url.slice(url.indexOf('=') + 1, url.indexOf('&'));
    this.props.eveMailWriteTokens(authToken);
    browserHistory.push('/eveMail');
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
