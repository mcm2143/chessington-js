import Piece from './piece';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const initialPosition = board.findPiece(this);

        const directionVectors = [{row:0,  col:-1},
                                  {row:0,  col:1},
                                  {row:1,  col:0},
                                  {row:-1, col:0},
                                  {row:1,  col:-1},
                                  {row:1,  col:1},
                                  {row:-1, col:-1},
                                  {row:-1, col:1}];
        
        const player = this.player;
        const availableMoves  = board.getAvailableMoves(player, initialPosition, directionVectors, 1);

        return availableMoves;
    }
}
