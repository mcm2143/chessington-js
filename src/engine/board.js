import Player from './player';
import GameSettings from './gameSettings';
import Square from './square';
import King from './pieces/king';

export default class Board {
    constructor(currentPlayer) {
        this.currentPlayer = currentPlayer ? currentPlayer : Player.WHITE;
        this.board = this.createBoard();
    }

    createBoard() {
        const board = new Array(GameSettings.BOARD_SIZE);
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(GameSettings.BOARD_SIZE);
        }
        return board;
    }

    setPiece(square, piece) {
        this.board[square.row][square.col] = piece;
    }

    getPiece(square) {
        if (this.board[square.row] === undefined) {
            return undefined
        }
        return this.board[square.row][square.col];
    }

    findPiece(pieceToFind) {
        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                if (this.board[row][col] === pieceToFind) {
                    return Square.at(row, col);
                }
            }
        }
        throw new Error('The supplied piece is not on the board');
    }

    movePiece(fromSquare, toSquare) {
        const movingPiece = this.getPiece(fromSquare);        
        if (!!movingPiece && movingPiece.player === this.currentPlayer) {
            this.setPiece(toSquare, movingPiece);
            this.setPiece(fromSquare, undefined);
            this.currentPlayer = (this.currentPlayer === Player.WHITE ? Player.BLACK : Player.WHITE);
        }
    }

    removeInvalidMoves (initialPosition, possibleMoves) {
        let currentRow = initialPosition.row
        let currentCol = initialPosition.col
    
        const availableMoves = possibleMoves.filter(square => (square.row < this.board.length
                                                            && square.row >=0
                                                            && square.col < this.board.length 
                                                            && square.col >=0
                                                            && (square.row != currentRow
                                                                || square.col != currentCol)))
                                                                
        return availableMoves;                                                  
    }

    getAvailableMoves (player, initialPosition, directionVectors, distance) {
        const possibleMoves = [];

        for (const direction of directionVectors) {
            let currentSquare = initialPosition;
            
            for (let i = 0; i < distance; i++) {
                currentSquare  = currentSquare.nextSquare(direction);
                let otherPiece = this.getPiece(currentSquare);
                
                if (otherPiece !== undefined) {
                    if ((player !== otherPiece.player) && !(otherPiece instanceof King)) {
                        possibleMoves.push(currentSquare);
                    }
                    break;
                } else {
                    possibleMoves.push(currentSquare);
                }               
            }
        }
        const availableMoves = this.removeInvalidMoves(initialPosition, possibleMoves)
        return availableMoves;
    }
}
