import Square from "./Square";
import "./Board.css";

function Board({ squares, xIsNext, onPlay, winner }) {
  const handleClick = (index) => {
    if (squares[index] || winner) {
      return;
    }
    const newSquares = [...squares];
    newSquares[index] = xIsNext ? "X" : "O";
    onPlay(newSquares);
  };

  return (
    <div className="board">
      {squares.map((square, index) => {
        return (
          <Square
            key={index}
            value={square}
            onSquareClick={() => {
              handleClick(index);
            }}
          />
        );
      })}
    </div>
  );
}

export default Board;
