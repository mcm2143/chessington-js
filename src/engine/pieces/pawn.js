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

        const pawnDirection = +(this.player === Player.WHITE)*2 -1;

        let currentRow = initialPosition.row
        let currentCol = initialPosition.col

        const forwardOneSquare = new Square(currentRow +1*pawnDirection, currentCol)
        if (board.getPiece(forwardOneSquare) !== undefined) {
            return availableMoves;
        } else {
            availableMoves.push(forwardOneSquare)
        }

        if ((currentRow === 1 && pawnDirection === 1) || (currentRow === board.board.length -2 && pawnDirection === -1)) {
            const forwardTwoSquare = new Square(currentRow +2*pawnDirection, currentCol)
            
            if (board.getPiece(forwardTwoSquare) === undefined) {
                availableMoves.push(forwardTwoSquare)
            }
            
        }

        return availableMoves;
    }
}
