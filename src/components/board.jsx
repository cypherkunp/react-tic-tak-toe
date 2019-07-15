import React, { Component } from 'react';
import Square from './square';

class Board extends Component {
  state = {
    squares: Array(9).fill(null)
  };

  handleClick = id => {
    const squares = [...this.state.squares];
    squares[id] = 'X';
    this.setState({ squares });
  };

  renderSquare(square, i) {
    return <Square value={square} onClick={() => this.handleClick(i)} />;
  }

  render() {
    const statusMessage = 'Next Payer X';
    const { squares } = this.state;

    return (
      <React.Fragment>
        <div className="status">{statusMessage}</div>
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

export default Board;
