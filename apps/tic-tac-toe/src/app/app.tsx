import React from 'react';
import './app.scss';

type SquareProps = {
  value: string;
} & React.HTMLAttributes<HTMLDivElement>

interface SquareState {
  value: string;
}

class Square extends React.Component<SquareProps, SquareState> {
  constructor(props: SquareProps) {
    super(props);
    this.state = {
      value: null
    };
  }

  render() {
    return (
      <button className="square" onClick={() => this.props.onClick({} as any)}>
        {this.props.value}
      </button>
    );
  }
}

interface BoardState {
  squares: Array<null | string>;
  xIsNext: boolean;
}

class Board extends React.Component<{}, BoardState> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i: number) {
    const squares = this.state.squares.slice();
    squares[i]= this.state.xIsNext ? 'X': 'O';
    this.setState({squares, xIsNext: !this.state.xIsNext});
  }

  renderSquare(i: number) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
  }

  render() {

    const winner = calculateWinner(this.state.squares);
    let status: string;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <h1 className="status">{status}</h1>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const app = Game;

export default app;

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
