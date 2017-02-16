import React, {Component} from 'react';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {eveMailGetMailBody} from '../../../actions/eve-mail';
import EveMailHeader from './eve-mail-header';
import EveMailItem from './eve-mail-item';
import Compose from './eve-mail-compose';

class EveMailHeaderList extends Component {
  render() {
    let display;

    if (this.props.eveMail.auxWindowDisplay == 'compose') {
      display =  <Compose/>;
    } else if (this.props.eveMail.auxWindowDisplay == 'mail') {
      display = (
          <EveMailItem
            subject={this.props.eveMail.mailRead.subject}
            from={this.props.eveMail.mailRead.from}
            body={this.props.eveMail.mailRead.body}
          />
        );
    } else if (this.props.auxWindowDisplay == null) {
      let headerList = [];
      let arrayName = this.props.eveMail.mailHeaderDisplay;
      this.props.eveMail[arrayName].forEach((ele, ind) => {
        headerList.push(
          <EveMailHeader
            key={ind}
            header={ele}
          />
        );
      });
      display = headerList;
    }

    return (
      <div>
        {display}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({eveMailGetMailBody}, dispatch);
}

function mapStateToProps(state, ownProps) {
  return {
    eveMail: state.eveMail
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EveMailHeaderList);
