import React from 'react';
import { Link } from 'react-router';

const WidgetItem = ({widgetName}) => {
  return (
    <Link to={`/${widgetName}`}><li>{widgetName}</li></Link>
  );

};


export default WidgetItem;
