export const movePiece = (pieceId, squareId) => ({
    type: 'MOVE_PIECE',
    piece: pieceId,
    toSquare: squareId
});