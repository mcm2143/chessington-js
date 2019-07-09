import Piece from './piece';
import Square from '../square';
import Player from '../player';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    canCastle(direction, board) {
        if (this.everMoved === true){
            return false;
        }

        const kingRow = +(this.player === Player.BLACK)*7;
        
        let castleSquares = [];
        let rook = '';

        switch (direction) {
            case 'Left':
                castleSquares = [new Square(kingRow, 1),
                                 new Square(kingRow, 2),
                                 new Square(kingRow, 3)];
                rook = board.getPiece(new Square(kingRow, 0));
                break;
            
            case 'Right':
                castleSquares = [new Square(kingRow, 5),
                                 new Square(kingRow, 6)];
                rook = board.getPiece(new Square(kingRow, 7));
                break;
        }
        
        if (rook === undefined || rook.everMoved) {
            return false;
        } else {
            for (let castleSquare of castleSquares) {
                if (board.getPiece(castleSquare) !== undefined) {
                    return false;
                }
            }
        }
        return true;
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
        
        if (this.canCastle('Left', board)) {
            directionVectors.push({row:0, col:-2})
        }
        if (this.canCastle('Right', board)) {
            directionVectors.push({row:0, col:+2})
        }

        const player = this.player;
        const availableMoves  = board.getAvailableMoves(player, initialPosition, directionVectors, 1);        

        return availableMoves;
    }

    moveTo(board, newSquare) {
        const initialPosition = board.findPiece(this);
        board.movePiece(initialPosition, newSquare);
        this.everMoved = true;

        if(Math.abs(newSquare.col - initialPosition.col) == 2) {
            let oldRookSquare;
            let newRookSquare;
            board.currentPlayer = this.player;

            if (newSquare.col > initialPosition.col) {
                oldRookSquare = new Square(initialPosition.row, 7);
                newRookSquare = new Square(initialPosition.row, 5);
            } else {
                oldRookSquare = new Square(initialPosition.row, 0);
                newRookSquare = new Square(initialPosition.row, 3);
            }

            const rook = board.getPiece(oldRookSquare);
            rook.moveTo(board, newRookSquare);
        }
    }
}
