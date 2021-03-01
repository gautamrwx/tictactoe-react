import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `Next Player is ${current.isXNext ? 'X' : 'O'} `}
      {!winner && noMovesLeft && 'Game Tied :)'}
    </h2>
  );
};

export default StatusMessage;
