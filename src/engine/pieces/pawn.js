import Piece from './piece';
import Square from '../square';
import Player from '../player';
import King from './king';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        //const boardArray
        const initialPosition = board.findPiece(this);
        const possibleMoves   = [];

        const pawnDirection = +(this.player === Player.WHITE)*2 -1;

        let currentRow = initialPosition.row
        let currentCol = initialPosition.col

        // moving pawn forward
        const forwardOneSquare = new Square(currentRow +1*pawnDirection, currentCol)
        if (board.getPiece(forwardOneSquare) === undefined) {
            possibleMoves.push(forwardOneSquare)
            
            if ((currentRow === 1 && pawnDirection === 1) || (currentRow === board.board.length -2 && pawnDirection === -1)) {
                const forwardTwoSquare = new Square(currentRow +2*pawnDirection, currentCol)
                
                if (board.getPiece(forwardTwoSquare) === undefined) {
                    possibleMoves.push(forwardTwoSquare)
                }
            }
        }

        // take pieces diagonally
        for (let direction of [-1, 1]) {
            let currentSquare  = new Square (currentRow +1*pawnDirection, currentCol + direction)
            let otherPiece = board.getPiece(currentSquare);
            
            if (otherPiece !== undefined) {
                if (this.player !== otherPiece.player) {
                    if (!(otherPiece instanceof King)) {
                        possibleMoves.push(currentSquare);
                    }
                }
            }               
        }


        const availableMoves = board.removeInvalidMoves(initialPosition, possibleMoves);

        return availableMoves;
    }
}
