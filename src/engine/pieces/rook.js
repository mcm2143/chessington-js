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

        const directionVectors = [{row:0,  col:1},
                                  {row:0,  col:-1},
                                  {row:1,  col:0},
                                  {row:-1, col:0}];
        
        for (const direction of directionVectors) {
            let currentSquare = initialPosition;
            
            for (let i = 0; i < board.board.length; i++) {
                currentSquare = currentSquare.nextSquare(direction);
                console.log(board.getPiece(currentSquare));
                
                if (board.getPiece(currentSquare) !== undefined) {
                    break;
                } else {
                    possibleMoves.push(currentSquare);
                }
            }
        }

        const availableMoves = board.removeInvalidMoves(initialPosition, possibleMoves);
        return availableMoves;
    }
}
