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
        const directionVectors = [{row:0,  col:-1},
                                  {row:0,  col:1},
                                  {row:1,  col:0},
                                  {row:-1, col:0},
                                  {row:1,  col:-1},
                                  {row:1,  col:1},
                                  {row:-1, col:-1},
                                  {row:-1, col:1}];
        
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
