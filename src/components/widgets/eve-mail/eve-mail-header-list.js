import React, {Component} from 'react';
import EveMailHeader from './eve-mail-header';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {eveMailFetchHeaders, eveMailFetchCharacterNames, changeUpdateStage} from '../../../actions/eve-mail';

class EveMailHeaderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerList: null,
      screen: null
    };
  }
  componentDidMount() {
    let headerList = [];
    this.props.mailHeaders.forEach((ele, ind) => {
      headerList.push(
        <EveMailHeader
          key={ind}
          header={ele}
          handleClick={this.handleClick.bind(this)}
        />
      );
    });
    this.setState({headerList: headerList});
    this.setState({screen: headerList});
  }
  handleClick(event) {
    let mailScreen = (
      <div>
        test
      </div>
    );
    this.setState({screen: mailScreen});
  }
  render() {
    return (
      <div>
        {this.state.screen}
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

export default connect(mapStateToProps, mapDispatchToProps)(EveMailHeaderList);
