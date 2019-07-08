import Piece from './piece';
import Square from '../square';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const initialPosition = board.findPiece(this);
        const possibleMoves  = [];

        let currentRow = initialPosition.row
        let currentCol = initialPosition.col

        for (let i = 0; i < 8; i++) {
            possibleMoves.push(new Square(i, currentCol))
            possibleMoves.push(new Square(currentRow, i))

            possibleMoves.push(new Square(currentRow +i, currentCol +i));
            possibleMoves.push(new Square(currentRow -i, currentCol +i));
            possibleMoves.push(new Square(currentRow +i, currentCol -i));
            possibleMoves.push(new Square(currentRow -i, currentCol -i));
        }
    
        const availableMoves = possibleMoves.filter(square => (square.row < 8 
                                                            && square.row >=0
                                                            && square.col < 8 
                                                            && square.col >=0
                                                            && (square.row != currentRow
                                                                || square.col != currentCol)))

        return availableMoves;
    }
}
