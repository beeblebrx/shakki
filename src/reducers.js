import initialGameState from './initialState';
import { WHITE, BLACK } from './constants';

const findPieceById = (id, pieces = {}) => {
    for (const [key, value] of Object.entries(pieces)) {
        if (value.props.id === id) {
            return {
                piece: value,
                color: value.props.color,
                fromSquare: key
            }
        }
    }

    return null;
}

const moveIsLegal = (piece, action, state) => {
    // you can only move pieces when it's turn of their color
    if (piece.color !== state.turn) {
        return false;
    }
    // moving piece to its square isn't a real move
    if (piece.fromSquare === action.toSquare) {
        return false;
    }
    let pieceInTargetSquare = state.pieces[action.toSquare];
    // moving to an empty square is always fine
    if (!pieceInTargetSquare) {
        return true;
    }
    // can't move to a square occupied by a piece of the same color
    if (pieceInTargetSquare.props.color === piece.color) {
        return false;
    }

    return true;
}

const nextTurn = (currentTurn) => {
    if (currentTurn === WHITE) {
        return BLACK;
    } else {
        return WHITE;
    }
}

const pieces = (state = initialGameState(), action) => {
    switch (action.type) {
        case 'MOVE_PIECE':
            const piece = findPieceById(action.piece, state.pieces);
            if (!piece) {
                return state;
            }
            if (!moveIsLegal(piece, action, state)) {
                return state;
            }
            const newPiecesMap = Object.assign({},
                state.pieces,
                { [action.toSquare] : piece.piece }
            );
            delete newPiecesMap[piece.fromSquare];
            return { turn: nextTurn(state.turn), pieces: newPiecesMap };
        default:
            return state;
    }
}

export default pieces;