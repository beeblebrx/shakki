import React from 'react';
import './Chessgame.css';
import Board from './Board';
import initialGameState from './initialState';

class ChessGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pieces: initialGameState()
    };
  }

  render() {
    console.log(this.state.pieces);
    return (
      <div className='game'>
        <Board pieces={this.state.pieces} />
      </div>
    );
  }
}

export default ChessGame;
