import React from 'react';
import { connect } from 'react-redux';
import WidgetSelector from './widget-selector';
import WidgetDescription from './widget-description';

require('./styles/settings.css');

const SettingsWidget = () => {

  return (
    <div className="settings-widget">
      <WidgetSelector />
      
      <WidgetDescription />
    </div>
  );
};

export default SettingsWidget;
