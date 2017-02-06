import React from 'react';

const RelmListItem = ({realm, index}) => {
  return(
    <option value={index}>
      {realm.name}
    </option>
  );
};

export default RelmListItem;
