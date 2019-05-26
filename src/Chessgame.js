import React from 'react';
import './Chessgame.css';
import Board from './Board';
import initialGameState from './initialState';
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class ChessGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pieces: initialGameState()
    };
  }

  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className='game'>
          <Board pieces={this.state.pieces} />
        </div>
      </DragDropContextProvider>
    );
  }
}

export default ChessGame;
