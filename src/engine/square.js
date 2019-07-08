export default class Square {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }

    static at(row, col) {
        return new Square(row, col);
    }

    equals(otherSquare) {
        return !!otherSquare && this.row === otherSquare.row && this.col === otherSquare.col;
    }

    nextSquare (direction) {
        const nextRow = this.row + direction.row;
        const nextCol = this.col + direction.col;
        //if (nextRow < 8 && nextRow >=0 && nextCol < 8 && nextCol >=0) {
            return new Square(nextRow, nextCol);
        //}
    //return undefined;
            
    }

    toString() {
        return `Row ${this.row}, Col ${this.col}`;
    }
}
