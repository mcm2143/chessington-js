import Piece from './piece';
import Square from '../square';
import King from './king';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const initialPosition = board.findPiece(this);

        const directionVectors = [{row:-1, col:-2},
                                  {row:-1, col:+2},
                                  {row:+1, col:-2},
                                  {row:+1, col:+2},
                                  {row:-2, col:-1},
                                  {row:-2, col:+1},
                                  {row:+2, col:-1},
                                  {row:+2, col:+1}];
        
        const player = this.player;
        const possibleMoves  = board.getPossibleMoves(player, initialPosition, directionVectors, 1);
        const availableMoves = board.removeInvalidMoves(initialPosition, possibleMoves);

        return availableMoves;
    }
}
