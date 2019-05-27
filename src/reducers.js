import initialGameState from './initialState';

const findPieceById = (id, pieces = {}) => {
    for (const [key, value] of Object.entries(pieces)) {
        if (value.props.id === id) {
            return {
                piece: value,
                fromSquare: key
            }
        }
    }

    return null;
}

const pieces = (state = initialGameState(), action) => {
    switch (action.type) {
        case 'MOVE_PIECE':
            const piece = findPieceById(action.piece, state.pieces);
            if (!piece) {
                return state;
            }
            const newPiecesMap = Object.assign({},
                state.pieces,
                { [action.toSquare] : piece.piece }
            );
            delete newPiecesMap[piece.fromSquare];
            return { pieces: newPiecesMap };
        default:
            return state;
    }
}

export default pieces;