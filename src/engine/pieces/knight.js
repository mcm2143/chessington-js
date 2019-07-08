import Piece from './piece';
import Square from '../square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const initialPosition = board.findPiece(this);
        const possibleMoves  = [];

        let currentRow = initialPosition.row
        let currentCol = initialPosition.col

        possibleMoves.push(new Square(currentRow -1, currentCol -2));
        possibleMoves.push(new Square(currentRow -1, currentCol +2));
        possibleMoves.push(new Square(currentRow +1, currentCol -2));
        possibleMoves.push(new Square(currentRow +1, currentCol +2));
        possibleMoves.push(new Square(currentRow -2, currentCol -1));
        possibleMoves.push(new Square(currentRow -2, currentCol +1));
        possibleMoves.push(new Square(currentRow +2, currentCol -1));
        possibleMoves.push(new Square(currentRow +2, currentCol +1));
    
        const availableMoves = board.removeInvalidMoves(initialPosition, possibleMoves);

        return availableMoves;
    }
}
