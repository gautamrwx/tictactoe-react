import React from 'react';

const Square = ({ value, clickAction }) => {
  return (
    <button className="square" type="button" onClick={clickAction}>
      {value}
    </button>
  );
};

export default Square;
