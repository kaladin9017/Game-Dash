import React from 'react';

const SavedItems = ({itemInfo}) => {
  return (
    <div className="video-detail col-md-8" id="weaponlist">
      <div className="embed-responsive embed-responsive-16by9">
        <img className="media-object" id="armorpic" src={`https://wow.zamimg.com/images/wow/icons/large/${itemInfo.icon}.jpg`} />
        <h3 id="weaponname">{itemInfo.name}</h3>
        <div className="details">
          <ul className="weaponul">
            <li className="weaponlistitem">Item Class: {itemInfo.itemClass}</li>
            <li className="weaponlistitem">Item Level: {itemInfo.itemLevel}</li>
            <li className="weaponlistitem">Sell Price: {itemInfo.sellPrice}</li>
            <li className="weaponlistitem">Item Quality: {itemInfo.sellPrice}</li>
            <li className="weaponlistitem">{itemInfo.description}</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default SavedItems;
