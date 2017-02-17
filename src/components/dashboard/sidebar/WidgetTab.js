import React from 'react';
import { Link } from 'react-router';
import WidgetItem from './WidgetItem';

const WidgetTab = ({gameName, widgets}) => {
  let widgetList = widgets.map((val, idx) => {return <WidgetItem widgetName={val} key={idx} /> ;});
  return (
      <div className="game-dropdown" data-toggle="collapse" data-target={`#demo${gameName}`}>
        <div>
          <p className="header">{gameName}</p>

          <div id={`demo${gameName}`} className="collapse">
            <div id="divider"></div>
            {widgetList}
          </div>
        </div>
      </div>
  );

};


export default WidgetTab;
