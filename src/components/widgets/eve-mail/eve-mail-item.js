import React, {Component} from 'react';
import {eveMailAuxWindowDisplayChange} from '../../../actions/eve-mail';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class EveMailItem extends Component {
  constructor() {
    super();
  }
  handleClick() {
    this.props.eveMailAuxWindowDisplayChange(null);
  }
  render() {
    return (
      <div>
        <h3>Subject: {this.props.subject}</h3>
        <br/>
        <h3>Sender:  {this.props.from}</h3>
        <br/>
        <div dangerouslySetInnerHTML={{ __html: this.props.body}}></div>
        <br/>
        <button onClick={this.handleClick.bind(this)}>Back</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({eveMailAuxWindowDisplayChange}, dispatch);
}

export default connect(null, mapDispatchToProps)(EveMailItem);
