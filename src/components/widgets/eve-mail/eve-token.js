import React, {Component} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {eveMailWriteTokens, eveMailGetNewAccessTokenWithRefreshToken, eveMailWriteTokensFromLocalStorage} from '../../../actions/eve-mail';
import {bindActionCreators} from 'redux';

class EveToken extends Component {
  componentDidMount(){
    if (this.props.updateStage == 0) {
      let url = window.location.href;
      let authToken = url.slice(url.indexOf('=') + 1, url.indexOf('&'));
      this.props.eveMailWriteTokens(authToken, 1);
      browserHistory.push('/eveMail');
    }
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
  return bindActionCreators({eveMailWriteTokens, eveMailGetNewAccessTokenWithRefreshToken, eveMailWriteTokensFromLocalStorage}, dispatch);
}

function mapStateToProps(state, ownProps) {
  return {
    updateStage: state.eveMail.updateStage
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EveToken);
