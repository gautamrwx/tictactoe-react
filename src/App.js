import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import StatusMessage from './components/StatusMessage';
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
  const { winner, winnigSquares } = calculateWinner(current.board);

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

  const moveTo = move => {
    setCurrentMove(move);
  };

  const resetGame = () => {
    setHistory([{ board: Array(9).fill(null), isXNext: true }]);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>
        Tic <span className="text-green">Tac</span> Toe
      </h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winningSquares={winnigSquares}
      />
      <button
        type="button"
        onClick={resetGame}
        className={`btn-reset ${winner ? 'active' : ''}`}
      >
        Start new Game
      </button>
      <h2 style={{ fontWeight: 'normal' }}>Moves History</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className="bg-balls" />
    </div>
  );
};

export default App;
