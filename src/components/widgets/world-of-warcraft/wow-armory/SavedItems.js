import React from 'react';

const SavedItems = ({itemInfo}) => {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <img className="media-object" src={`https://wow.zamimg.com/images/wow/icons/large/${itemInfo.icon}.jpg`} />
      <div className="details">
        <h3>{itemInfo.name}</h3>
        <ul>
          <li>Item Class: {itemInfo.itemClass}</li>
          <li>Item Level: {itemInfo.itemLevel}</li>
          <li>Sell Price: {itemInfo.sellPrice}</li>
          <li>Item Quality: {itemInfo.sellPrice}</li>
          <li>{itemInfo.description}</li>
        </ul>
      </div>
    </div>
  );
};

export default SavedItems;
