import React from 'react';
import { Link } from 'react-router';

const WidgetItem = ({widgetName}) => {
  return (
    <div className="widget-item">
      <span className="glyphicon glyphicon-remove" id="x"></span><Link to={`/${widgetName}`}>{widgetName}</Link>
    </div>
  );

};


export default WidgetItem;
