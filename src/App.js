import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helpers';
import './styles/root.scss';

const App = () => {
  // History is array to store square values with next move
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);

  // Set current move to current index of history
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];

  // Check What Message to Dislay Above Board
  const winner = calculateWinner(current.board);
  const message = winner
    ? `Winner is ${winner}`
    : `This if turn for ${current.isXNext ? 'X' : 'O'}`;

  // Handle every click on square boxes
  const handleSquareClick = position => {
    if (current.board[position] || winner) return;

    setHistory(prev => {
      const lastHist = prev[prev.length - 1];
      const newBoard = lastHist.board.map((square, pos) => {
        // Insert new elemnt in board at clicked position
        if (pos === position) return lastHist.isXNext ? 'X' : 'O';
        return square;
      });
      return prev.concat({ board: newBoard, isXNext: !lastHist.isXNext });
    });
    setCurrentMove(prev => prev + 1);
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h2>{message}</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
