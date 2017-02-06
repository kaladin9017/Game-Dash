import React from 'react';

const SelectedRealm = ({realm}) => {
  if(realm) {
    return (
      <ul>
        <h3>{realm.name}</h3>
          <li>{realm.status ? 'ON' : 'OFF'}</li>
          <li>{realm.type}</li>
          <li>{realm.population}</li>
      </ul>
  );
  }
  else {
    return <div>Loading</div>;
  }
};

export default SelectedRealm;
