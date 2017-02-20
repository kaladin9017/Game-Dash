import React from 'react';

const WidgetDescription = ({selected}) => {
  if(!selected) { return <div>Select A Widget</div> ;}
  else {
    return (
      <div className="widget-description">
        {selected.name}
        <button className="Rectangle-2">
          Add Widget
        </button>
      </div>
    );
  }
};

export default WidgetDescription;
