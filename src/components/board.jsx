import React, { Component } from 'react';
import Square from './square';

class Board extends Component {
  state = {
    squares: Array(9).fill(null),
    xIsNext: true
  };

  handleClick(id) {
    const squares = [...this.state.squares];
    if (calculateWinner(squares) || squares[id]) {
      return;
    }

    squares[id] = this.state.xIsNext ? 'X' : 'O';
    const xIsNext = !this.state.xIsNext;

    this.setState({ squares, xIsNext });
  }

  renderSquare(square, i) {
    return <Square value={square} onClick={() => this.handleClick(i)} />;
  }

  getStatusHeader(player, xIsNext) {
    return player ? `Winner is player: ${player}` : `Next Payer ${xIsNext ? 'X' : 'O'}`;
  }

  render() {
    const { squares, xIsNext } = this.state;

    let statusMessage = this.getStatusHeader(calculateWinner(this.state.squares), xIsNext);

    return (
      <React.Fragment>
        <div className="status alert alert-info" role="alert">
          {statusMessage}
        </div>
        <div className="board-row">
          {this.renderSquare(squares[0], 0)}
          {this.renderSquare(squares[1], 1)}
          {this.renderSquare(squares[2], 2)}
        </div>
        <div className="board-row">
          {this.renderSquare(squares[3], 3)}
          {this.renderSquare(squares[4], 4)}
          {this.renderSquare(squares[5], 5)}
        </div>
        <div className="board-row">
          {this.renderSquare(squares[6], 6)}
          {this.renderSquare(squares[7], 7)}
          {this.renderSquare(squares[8], 8)}
        </div>
      </React.Fragment>
    );
  }
}

function calculateWinner(squares) {
  let winner = null;
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const wc of winCombinations) {
    const [a, b, c] = wc;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      winner = squares[a];
      break;
    }
  }

  return winner;
}

export default Board;
