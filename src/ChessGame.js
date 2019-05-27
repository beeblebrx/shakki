import { connect } from 'react-redux';
import { movePiece } from './actions';
import Board from './Board';

const mapStateToProps = state => {
    return {
        pieces: state.pieces
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPieceDrop: (pieceId, squareId) => {
            dispatch(movePiece(pieceId, squareId));
        }
    }
}

const ChessGame = connect(
    mapStateToProps,
    mapDispatchToProps    
)(Board);

export default ChessGame;
