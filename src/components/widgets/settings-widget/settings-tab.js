import React from 'react';

require('./styles/settings.css');

const SettingsTab = () => {

  return (
    <div className="settings-dropdown">
      <label className="settings-header">EVE</label>
      <ul>
        <li>Eve Mail</li>
        <li>Asset Tracket</li>
      </ul>
    </div>
  );
};

export default SettingsTab;
