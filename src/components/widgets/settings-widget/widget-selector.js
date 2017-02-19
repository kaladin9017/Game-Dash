import React from 'react';

const WidgetSelector = ({handleSelect}) => {
  const style = {
    marginLeft: "8%",
    marginTop: "80px",
    marginBottom: "25px",
    fontFamily: "DINOT",
    fontSize: "20px",
    fontWeight: "bold",
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: 1,
    letterSpacing: "normal",
    textAlign: "left",
    color: "#ffffff"
  };

  return (
    <div className="widget-selector">
      <div style={style} >All Widgets</div>
      <div className="settings-dropdown">
        <label className="settings-header">Eve</label>
        <ul>
          <li onClick={handleSelect.bind(this, 'evemail')}>Eve Mail</li>
          <li onClick={handleSelect.bind(this, 'assetTracker')}>Asset Tracket</li>
        </ul>
      </div>

      <div className="settings-dropdown">
        <label className="settings-header">World Of Warcraft</label>
        <ul>
          <li onClick={handleSelect.bind(this, 'armory')}>Armory</li>
          <li onClick={handleSelect.bind(this, 'relmstatus')}>Relm Status</li>
        </ul>
      </div>

      <div className="settings-dropdown">
        <label className="settings-header">Misc</label>
        <ul>
          <li onClick={handleSelect.bind(this, 'youtube')}>Youtube</li>
          <li onClick={handleSelect.bind(this, 'twitch')}>Twitch</li>
          <li onClick={handleSelect.bind(this, 'movie')}>Couch Potato</li>
          <li onClick={handleSelect.bind(this, 'tv')}>Binge Tv</li>
        </ul>
      </div>
    </div>
  );
};

export default WidgetSelector;
