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

        let availableRow = initialPosition.row
        let availableCol = initialPosition.col

        if (this.player === Player.WHITE) {
            availableRow += 1;
        } else {
            availableRow -= 1;
        }

        availableMoves.push(new Square(availableRow, availableCol))
        return availableMoves;
    }
}
