import React from 'react';
require('./relmstyles/relmstyles.css');

const SelectedRealm = ({realm}) => {
  if(realm) {
    return (
      <ul className="relmul">
        <h1>{realm.name}</h1>
          <li className="relmitem">Relm status: <span id="relmchangeone">{realm.status ? 'ON' : 'OFF'}</span></li>
          <li className="relmitem">Relm type: <span id="relmchangetwo">{realm.type}</span></li>
          <li className="relmitem">Relm Population: <span id="relmchangethree">{realm.population}</span></li>
      </ul>
  );
  }
  else {
    return <div>Loading</div>;
  }
};

export default SelectedRealm;
