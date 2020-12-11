import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { DragDropContextProvider } from 'react-dnd'

import './App.css';
import ChessGame from './ChessGame';
import pieces from './reducers';

const store = createStore(pieces);

const App = () => (
    <Provider store={store}>
        <DragDropContextProvider backend={HTML5Backend}>
            <div className="game">
                <ChessGame />
            </div>
        </DragDropContextProvider>
    </Provider>
);

export default App;
