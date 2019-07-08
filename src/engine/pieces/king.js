import Piece from './piece';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const initialPosition = board.findPiece(this);
        const possibleMoves  = [];

        let currentRow = initialPosition.row
        let currentCol = initialPosition.col

        possibleMoves.push(new Square(currentRow +1, currentCol));
        possibleMoves.push(new Square(currentRow -1, currentCol));
        possibleMoves.push(new Square(currentRow, currentCol +1));
        possibleMoves.push(new Square(currentRow, currentCol -1));

        possibleMoves.push(new Square(currentRow +1, currentCol +1));
        possibleMoves.push(new Square(currentRow -1, currentCol +1));
        possibleMoves.push(new Square(currentRow +1, currentCol -1));
        possibleMoves.push(new Square(currentRow -1, currentCol -1));
    
        const availableMoves = board.removeInvalidMoves(initialPosition, possibleMoves);

        return availableMoves;
    }
}
