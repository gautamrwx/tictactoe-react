import React from 'react';

const Square = ({ value, clickAction, isWinningSquare }) => {
  return (
    <button
      className="square"
      type="button"
      onClick={clickAction}
      style={{ fontWeight: isWinningSquare ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};

export default Square;
