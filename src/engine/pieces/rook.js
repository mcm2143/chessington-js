import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const initialPosition = board.findPiece(this);
        const availableMoves  = [];

        let currentRow = initialPosition.row
        let currentCol = initialPosition.col

        for (let i = 0; i < 8; i++) {
            if (i !== currentRow) {
                availableMoves.push(new Square(i, currentCol))
            }
            if (i !== currentCol) {
                availableMoves.push(new Square(currentRow, i))
            }
        }
        
        return availableMoves;
    }
}
