import React from 'react';

const Square = ({ value, clickAction, isWinningSquare }) => {
  return (
    <button
      type="button"
      onClick={clickAction}
      className={`square ${isWinningSquare ? 'active' : ''} ${
        value === 'X' ? 'text-green' : 'text-orange'
      }`}
      style={{ fontWeight: isWinningSquare ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};

export default Square;
