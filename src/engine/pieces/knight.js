import Piece from './piece';
import Square from '../square';
import King from './king';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const initialPosition = board.findPiece(this);
        const possibleMoves  = [];

        let currentRow = initialPosition.row
        let currentCol = initialPosition.col

        const directionVectors = [{row:-1, col:-2},
                                  {row:-1, col:+2},
                                  {row:+1, col:-2},
                                  {row:+1, col:+2},
                                  {row:-2, col:-1},
                                  {row:-2, col:+1},
                                  {row:+2, col:-1},
                                  {row:+2, col:+1}];
        
        for (const direction of directionVectors) {
            let currentSquare = initialPosition.nextSquare(direction);
    
            let otherPiece = board.getPiece(currentSquare);
            if (otherPiece !== undefined) {
                if (this.player !== otherPiece.player) {
                    if (!(otherPiece instanceof King)) {
                        possibleMoves.push(currentSquare);
                    }
                }
            } else {
                possibleMoves.push(currentSquare);
            }
        }
    
        const availableMoves = board.removeInvalidMoves(initialPosition, possibleMoves);

        return availableMoves;
    }
}
