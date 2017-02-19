import React, { Component } from 'react';
import { connect } from 'react-redux';
import WidgetSelector from './widget-selector';
import WidgetDescription from './widget-description';

require('./styles/settings.css');

class SettingsWidget extends Component {
  constructor(props) {
    super();
    this.state = { evemail: {name:'Eve Mail', image: 'Image', tag: 'evemail'}, selected: null };

  }

  handleSelect (term) {    
    this.setState({selected: this.state[term]});
  }
  render () {
    return (
      <div className="settings-widget">
        <WidgetSelector handleSelect={this.handleSelect.bind(this)} />

        <WidgetDescription selected={this.state.selected} />
      </div>
    );
  }

}

export default SettingsWidget;
