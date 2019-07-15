import React, { Component } from 'react';
import Board from './board';
import './game.css';

class Game extends Component {
  state = {};
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info" />
      </div>
    );
  }
}

export default Game;
