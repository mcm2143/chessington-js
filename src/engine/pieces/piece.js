

export default class Piece {
    constructor(player) {
        this.player = player;
        this.everMoved = false;
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
        this.everMoved = true;
    }

    
}
