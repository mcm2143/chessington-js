import Piece from './piece';
import Square from '../square';
import King from './king';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const initialPosition = board.findPiece(this);

        const directionVectors = [{row:0,  col:-1},
                                  {row:0,  col:1},
                                  {row:1,  col:0},
                                  {row:-1, col:0}];
        
        const player = this.player;
        const possibleMoves  = board.getPossibleMoves(player, initialPosition, directionVectors, 8);
        const availableMoves = board.removeInvalidMoves(initialPosition, possibleMoves);
        return availableMoves;
    }
}
