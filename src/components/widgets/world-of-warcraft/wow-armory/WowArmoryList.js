import React from 'react';
import WowArmoryItem from './WowArmoryItem';
require('./wowstyles/wowstyle.css');

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
    <div className="listdiv">
      <ul className="col-md-4 list-group">
        {armoryItems}
      </ul>
    </div>
  );
};

export default WowArmoryList;
