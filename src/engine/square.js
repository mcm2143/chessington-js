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
        return new Square(nextRow, nextCol);
    }

    toString() {
        return `Row ${this.row}, Col ${this.col}`;
    }
}
