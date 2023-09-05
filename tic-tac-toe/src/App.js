import { useState } from "react";
import "./App.css";
import Board from "./Components/Board";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  let status = "";
  const winner = calculateWinner(squares);
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Turn: " + (xIsNext ? "X" : "O");
  }

  const handlePlay = (newSquares) => {
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const restartGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="App">
      <h1 className="game-title">Tic-Tac-Toe</h1>
      <h2 className="status">{status}</h2>
      <Board
        squares={squares}
        xIsNext={xIsNext}
        onPlay={handlePlay}
        winner={winner}
      />
      <button className="restart" onClick={restartGame}>
        Restart
      </button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
