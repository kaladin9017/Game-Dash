import React from 'react';

const WowArmoryItem = ({item, onItemSelect}) => {
  
  return (
    <li onClick={onItemSelect.bind(this,item)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={`https://wow.zamimg.com/images/wow/icons/small/${item.iconS}.jpg`}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{item.name}</div>
        </div>
      </div>
    </li>
  );

};


export default WowArmoryItem;
