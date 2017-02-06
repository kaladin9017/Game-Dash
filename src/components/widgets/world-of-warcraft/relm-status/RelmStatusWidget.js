import React, { Component } from 'react';
import { connect } from 'react-redux';

import RelmList from './RelmList';
import SelectedRealm from './SelectedRealm';

import { getWowRelmStatus } from '../../../../actions/index';

class RelmStatusWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {currentRealmIndex: 0};
  }
  componentDidMount() {
    this.props.getWowRelmStatus();
  }
  handleRealmSelected(event) {
    this.setState({currentRealmIndex: event.target.value});
  }

  render() {
    return(
      <div>
        {this.props.wowRelms.realms ? <div> <RelmList getRelm={this.handleRealmSelected.bind(this)} props={this.props.wowRelms} /> <SelectedRealm realm={this.props.wowRelms.realms[this.state.currentRealmIndex]}/> </div> : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    wowRelms: state.wowRelms
  };
}

export default connect(mapStateToProps,{getWowRelmStatus})(RelmStatusWidget);
