import React from 'react';

import RelmListItem from './RelmListItem';


const RelmList = ({props, getRelm}) => {
  let relmList = props.realms.map((realm, idx) => {
    return <RelmListItem realm={realm} key={idx} index={idx} />;
  });

  return (
    <select onChange={getRelm} name="realms">
      {relmList}
    </select>
  );
};

export default RelmList;
