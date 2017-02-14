import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {eveMailMailHeaderDisplayChange} from '../../../actions/eve-mail';
import EveNameSearch from './eve-mail-name-search';

class Compose extends Component {
  constructor() {
    super();
    this.state = {
      subject: '',
      body: ''
    };
  }
  updateSubject(e) {
    this.setState({subject: e.currentTarget.value});
  }
  updateBody(e) {
    this.setState({subject: e.currentTarget.value});
  }
  handleClick() {
    this.props.eveMailMailHeaderDisplayChange('headers');
  }
  render() {
    return (
      <div>
        <EveNameSearch/>
        <form>
          <input type="text" placeholder="Subject" onChange={this.updateSubject.bind(this)}></input>
          <br/>
          <input type="text" placeholder="Body" onChange={this.updateBody.bind(this)}></input>
          <br/>
        </form>
        <button onClick={this.handleClick.bind(this)}>Back</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({eveMailMailHeaderDisplayChange}, dispatch);
}

export default connect(null, mapDispatchToProps)(Compose);
