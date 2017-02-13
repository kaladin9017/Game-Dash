import React, {Component} from 'react';
import {eveMailGetMailBody} from '../../../actions/eve-mail';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class EveMailHeader extends Component {
  constructor(props) {
    super(props);
  }
  handleClick() {
    let charId = this.props.characterId;
    let accessToken = this.props.accessToken;
    let mailId = this.props.header.mail_id;
    let from = this.props.header.from;
    this.props.eveMailGetMailBody(charId, accessToken, mailId, from);
  }
  render() {
    return (
      <div>
        <li>
          <p>subject: {this.props.header.subject}</p>
          <p>sender: {this.props.header.from}</p>
          <button onClick={this.handleClick.bind(this)}>Read</button>
        </li>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({eveMailGetMailBody}, dispatch);
}

function mapStateToProps(state, ownProps) {
  return {
    characterId: state.eveMail.characterId,
    accessToken: state.eveMail.accessToken
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EveMailHeader);
