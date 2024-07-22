export default function Square({ value, onSquareClick }) {
    return (
      <button className="square btn btn-squared-default border-2" onClick={onSquareClick}>
        {value}
      </button>
    );
  }