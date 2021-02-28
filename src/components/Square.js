import React from 'react';

const Square = ({ value }) => {
  return (
    <button className="square" type="button">
      {value}
    </button>
  );
};

export default Square;
