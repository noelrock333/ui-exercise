import React from 'react';
import ActionsWrapper from './styles';

const Actions = ({ toggleSelections, checked }) => {
  return (
    <ActionsWrapper className="actions-menu">
      <div>
        <label htmlFor="select-all">Select All</label>
        <input type="checkbox" id="select-all" onClick={toggleSelections} checked={checked} />
      </div>
    </ActionsWrapper>
  );
};

export default Actions;
