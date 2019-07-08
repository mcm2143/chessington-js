import Piece from './piece';
import Square from '../square';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const initialPosition = board.findPiece(this);
        const possibleMoves  = [];

        let currentRow = initialPosition.row
        let currentCol = initialPosition.col

        for (let i = 1; i < board.board.length; i++) {
            possibleMoves.push(new Square(currentRow +i, currentCol +i));
            possibleMoves.push(new Square(currentRow -i, currentCol +i));
            possibleMoves.push(new Square(currentRow +i, currentCol -i));
            possibleMoves.push(new Square(currentRow -i, currentCol -i));
        }

        const availableMoves = board.removeInvalidMoves(initialPosition, possibleMoves);
        
        return availableMoves;
    }
}
