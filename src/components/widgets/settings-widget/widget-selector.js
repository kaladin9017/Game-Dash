import React from 'react';

const WidgetSelector = ({handleSelect}) => {
  const style = {
    marginLeft: "8%",
    marginTop: "80px",
    marginBottom: "25px",
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
      <div className="settingswrap">
        <label className="settings-header"><span id="gamename">Eve</span></label>
      </div>
        <hr className="settingshr"/>
        <ul id="evesettingsul">
          <li id="eveulone" onClick={handleSelect.bind(this, 'evemail')}><span className="glyphicon glyphicon-menu-right" id="pointer"></span>Eve Mail</li>
          <li id="eveultwo" onClick={handleSelect.bind(this, 'assetTracker')}><span className="glyphicon glyphicon-menu-right" id="pointer"></span>Asset Tracket</li>
        </ul>
      </div>

      <div className="settings-dropdown">
      <div className="settingswrap">
        <label className="settings-header"><span id="gamename">World Of Warcraft</span></label>
      </div>
        <hr className="settingshr"/>
        <ul>
          <li onClick={handleSelect.bind(this, 'armory')}><span className="glyphicon glyphicon-menu-right" id="pointer"></span>Armory</li>
          <li onClick={handleSelect.bind(this, 'relmstatus')}><span className="glyphicon glyphicon-menu-right" id="pointer"></span>Relm Status</li>
        </ul>
      </div>

      <div className="settings-dropdown">
      <div className="settingswrap">
        <label className="settings-header"><span id="gamename">Guild Wars</span></label>
      </div>
        <hr className="settingshr"/>
        <ul>
          <li onClick={handleSelect.bind(this, 'armory')}><span className="glyphicon glyphicon-menu-right" id="pointer"></span>Talent Calculator</li>
        </ul>
      </div>

      <div className="settings-dropdown">
      <div className="settingswrap">
        <label className="settings-header"><span id="gamename">Path Of Exile</span></label>
      </div>
        <hr className="settingshr"/>
        <ul>
          <li onClick={handleSelect.bind(this, 'armory')}><span className="glyphicon glyphicon-menu-right" id="pointer"></span>Talent Calculator</li>
        </ul>
      </div>

      <div className="settings-dropdown">
      <div className="settingswrap">
        <label className="settings-header"><span id="gamename">Addons</span></label>
      </div>
        <hr className="settingshr"/>
        <ul>
          <li onClick={handleSelect.bind(this, 'youtube')}><span className="glyphicon glyphicon-menu-right" id="pointer"></span>Youtube</li>
          <li onClick={handleSelect.bind(this, 'twitch')}><span className="glyphicon glyphicon-menu-right" id="pointer"></span>Twitch</li>
          <li onClick={handleSelect.bind(this, 'movie')}><span className="glyphicon glyphicon-menu-right" id="pointer"></span>Couch Potato</li>
          <li onClick={handleSelect.bind(this, 'tv')}><span className="glyphicon glyphicon-menu-right" id="pointer"></span>Binge Tv</li>
        </ul>
      </div>
    </div>
  );
};

export default WidgetSelector;
