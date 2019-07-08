import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const initialPosition = board.findPiece(this);
        const possibleMoves  = [];

        let currentRow = initialPosition.row
        let currentCol = initialPosition.col

        for (let i = 0; i < board.board.length; i++) {
            possibleMoves.push(new Square(i, currentCol))
            possibleMoves.push(new Square(currentRow, i))
        }
        const availableMoves = board.removeInvalidMoves(initialPosition, possibleMoves);
        return availableMoves;
    }
}
