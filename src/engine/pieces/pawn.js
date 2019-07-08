import Piece from './piece';
import Square from '../square';
import Player from '../player';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        //const boardArray
        const initialPosition = board.findPiece(this);
        const availableMoves  = [];

        let currentRow = initialPosition.row
        let currentCol = initialPosition.col

        if (this.player === Player.WHITE) {
            availableMoves.push(new Square(currentRow +1, currentCol))
            if (currentRow === 1) {
                availableMoves.push(new Square(currentRow +2, currentCol))
            }

        } else {
            availableMoves.push(new Square(currentRow -1, currentCol))
            if (currentRow === 6) {
                availableMoves.push(new Square(currentRow -2, currentCol))
            }
        }

        
        return availableMoves;
    }
}
