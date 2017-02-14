import React, {Component} from 'react';
import {eveMailMailHeaderDisplayChange} from '../../../actions/eve-mail';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class EveMailSidebar extends Component {
  constructor() {
    super();
  }
  clickCompose() {
    this.props.eveMailMailHeaderDisplayChange('compose');
  }
  render() {
    return (
      <div>
        <button>Refresh</button>
        <button onClick={this.clickCompose.bind(this)}>Compose</button>
        <button>Inbox</button>
        <button>Alliance</button>
        <button>Corporation</button>
        <button>Sent</button>
        <button>Trash</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({eveMailMailHeaderDisplayChange}, dispatch);
}

export default connect(null, mapDispatchToProps)(EveMailSidebar);
