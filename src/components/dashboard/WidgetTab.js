import React from 'react';
import { Link } from 'react-router';
import WidgetItem from './WidgetItem';

const WidgetTab = ({gameName, widgets}) => {
  let widgetList = widgets.map((val, idx) => {return <WidgetItem widgetName={val} key={idx} /> ;});
  return (
      <ul className="game" id="gameone" >{gameName}
        {widgetList}
      </ul>
  );

};


export default WidgetTab;
