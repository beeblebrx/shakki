import React from 'react';
import './Board.css';
import Square from './Square';

class Board extends React.PureComponent {
    translateToNotation(rank, file) {
        const letters = {
            7: 'A', 6: 'B', 5: 'C', 4: 'D',
            3: 'E', 2: 'F', 1: 'G', 0: 'H'
        };

        return `${letters[file]}${(rank + 1)}`;
    }

    renderSquare(i) {
        const x = i % 8;
        const y = Math.floor(i / 8);
        const black = (x + y) % 2 === 1;
        const squareId = this.translateToNotation(x, y);
        return (
            <Square key={i} color={black ? 'black' : 'white'} id={squareId}>
                {this.props.pieces[squareId]}
            </Square>
        )
    }
    
    render() {
        const squares = []
        for (let i = 0; i < 64; i++) {
            squares.push(this.renderSquare(i));
        }
        return (
            <div className='board'>
                {squares}
            </div>
        )
    }
}

export default Board;
