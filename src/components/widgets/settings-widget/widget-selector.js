import React from 'react';

const WidgetSelector = () => {
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
          <li>Eve Mail</li>
          <li>Asset Tracket</li>
        </ul>
      </div>

      <div className="settings-dropdown">
        <label className="settings-header">World Of Warcraft</label>
        <ul>
          <li>Armory</li>
          <li>Relm Status</li>
        </ul>
      </div>

      <div className="settings-dropdown">
        <label className="settings-header">Misc</label>
        <ul>
          <li>Youtube</li>
          <li>Twitch</li>
          <li>Couch Potato</li>
          <li>Binge Tv</li>
        </ul>
      </div>
    </div>
  );
};

export default WidgetSelector;
