import React from 'react';
import WowArmoryItem from './WowArmoryItem';

const WowArmoryList = (props) => {
  const armoryItems = props.items.map((item) => {
    return (
      <WowArmoryItem
        onItemSelect = {props.onItemSelect}
        item={item}
        key={item.objectID}  />
    );
  });

  return(
    <ul className="col-md-4 list-group">
      {armoryItems}
    </ul>
  );
};

export default WowArmoryList;
