import React, { Component } from 'react';
import Board from './board';
import './game.css';

class Game extends Component {
  state = {};
  render() {
    return (
      <main className="container-fluid">
        <div class="row align-items-center">
          <div className="col-sm" />
          <div className="col-sm">
            <div class="card ">
              <div className="game">
                <div className="game-board">
                  <center>
                    <Board />
                  </center>
                </div>
                <div className="game-info" />
              </div>
            </div>
          </div>
          <div className="col-sm" />
        </div>
      </main>
    );
  }
}

export default Game;
