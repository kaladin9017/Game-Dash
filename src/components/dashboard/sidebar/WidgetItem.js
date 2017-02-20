import React from 'react';
import { Link } from 'react-router';

const WidgetItem = ({widgetName}) => {
  return (
    <div className="widget-item">
      <Link to={`/${widgetName}`}>{widgetName}</Link>
    </div>
  );

};


export default WidgetItem;
