import React from 'react';

const WowItemDisplay = ({item, itemInfo}) => {
  if(!item){
    return <div className="loading">Loading</div>;
  }
  else {
    let dmgMin;
    let dmgMax;
    let speed;
    if(itemInfo) {
      dmgMin = itemInfo.weaponInfo.damage.exactMin;
      dmgMax = itemInfo.weaponInfo.damage.exactMax;
      speed = itemInfo.weaponInfo.weaponSpeed;
    }
    const itemId = item.objectID;
    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <img className="media-object" src={`https://wow.zamimg.com/images/wow/icons/large/${item.iconS}.jpg`} />
          <div className="details">
            <div>{item.name}</div>
            <ul>
              <li>{dmgMin} - {dmgMax} Damage   Speed {speed}</li>
              <li></li>
            </ul>

          </div>
        </div>

      </div>
    );
  }

};

export default WowItemDisplay;
