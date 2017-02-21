import React from 'react';
require('./relmstyles/relmstyles.css');

import RelmListItem from './RelmListItem';


const RelmList = ({props, getRelm}) => {
  let relmList = props.realms.map((realm, idx) => {
    return <RelmListItem realm={realm} key={idx} index={idx} />;
  });

  return (
  	<div>
	  	<h1 id="relmheading">Select a Relm from the dropdown list below!</h1>
	  	<hr id="relmultwo"/ >
	    <select onChange={getRelm} name="realms">
	      {relmList}
	    </select>
    </div>
  );
};

export default RelmList;
