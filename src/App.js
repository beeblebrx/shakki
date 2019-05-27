import React from 'react';
import './App.css';
import ChessGame from './ChessGame';
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

const App = () => (
  <DragDropContextProvider backend={HTML5Backend}>
    <div className="game">
      <ChessGame />
    </div>
  </DragDropContextProvider>
);

export default App;
