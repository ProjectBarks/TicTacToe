import Marking from "./Marking"

const wins = [
    //diagonal
    [0, 4, 8], [2, 4, 6],
    //horizontal
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    //vertical
    [0, 3, 6], [1, 4, 7], [2, 5, 8]
];


class Board {

    constructor(squares = [0, 0, 0, 0, 0, 0, 0, 0, 0], emptyCells = [0, 1, 2, 3, 4, 5, 6, 7, 8], lastMove = null) {
        if (squares.length !== 9)
            throw new Error("Field length must be exactly 9");
        this.lastMove = lastMove;
        this.squares = squares;
        this.emptyCells = emptyCells;
    }

    get winners() {
        if (this.emptyCells.length > 4)
            return [];
        let total;
        for (let win of wins) {
            total = this.squares[win[0]] + this.squares[win[1]] + this.squares[win[2]];
            if (total === 3 || total === -3) break;
        }

        const marking = Marking.match(total / 3);
        if (marking === null || marking === Marking.EMPTY)
            return this.emptyCells.length ===  0 ? [Marking.O, Marking.X] : [];
        else
            return [marking];
    }

    play(cell, marking) {
        if (marking === Marking.EMPTY)
            throw new Error("Cannot play an empty cell!");
        const currentEmpty = this.emptyCells.slice(), currentBoard = this.squares.slice();
        currentEmpty.splice(this.emptyCells.indexOf(cell), 1);
        currentBoard[cell] = marking.value;
        return new Board(currentBoard, currentEmpty, cell);
    }

    equals(board) {
        if (this.lastMove !== board.lastMove) {
            for (let i = 0; i < 9; i++) {
                if (this.squares[i] === board.squares[i])
                    continue;
                return false;
            }
        }
        return true
    }

    moves(marking) {
        const results = [];
        for (let i = 0; i < this.emptyCells.length; i++) results.push(this.play(this.emptyCells[i], marking));
        return results;
    }
}

export default Board