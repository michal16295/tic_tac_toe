"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GameLogic {
    constructor() {
        this._computer = "O";
        this._player = "X";
    }
    isMovesLeft(position) {
        for (let i = 0; i < 3; i++)
            for (let j = 0; j < 3; j++)
                if (position[i][j] === "")
                    return true;
        return false;
    }
    evaluate(b) {
        for (let row = 0; row < 3; row++) {
            if (b[row][0] === b[row][1] && b[row][1] === b[row][2]) {
                if (b[row][0] == this._computer)
                    return +10;
                else if (b[row][0] == this._player)
                    return -10;
            }
        }
        for (let col = 0; col < 3; col++) {
            if (b[0][col] === b[1][col] && b[1][col] === b[2][col]) {
                if (b[0][col] == this._computer)
                    return +10;
                else if (b[0][col] == this._player)
                    return -10;
            }
        }
        if (b[0][0] === b[1][1] && b[1][1] === b[2][2]) {
            if (b[0][0] === this._computer)
                return +10;
            else if (b[0][0] === this._player)
                return -10;
        }
        if (b[0][2] === b[1][1] && b[1][1] == b[2][0]) {
            if (b[0][2] === this._computer)
                return +10;
            else if (b[0][2] === this._player)
                return -10;
        }
        return 0;
    }
    minimax(board, depth, isMax, level) {
        let score = this.evaluate(board);
        if (score === 10)
            return score;
        if (score === -10)
            return score;
        if (!this.isMovesLeft(board))
            return 0;
        if (isMax) {
            let best = -1000;
            for (let i = 0; i < level; i++) {
                for (let j = 0; j < level; j++) {
                    if (board[i][j] === "") {
                        board[i][j] = this._computer;
                        best = Math.max(best, this.minimax(board, depth + 1, !isMax, level));
                        board[i][j] = "";
                    }
                }
            }
            return best;
        }
        else {
            let best = 1000;
            for (let i = 0; i < level; i++) {
                for (let j = 0; j < level; j++) {
                    if (board[i][j] === "") {
                        board[i][j] = this._player;
                        best = Math.min(best, this.minimax(board, depth + 1, !isMax, level));
                        board[i][j] = "";
                    }
                }
            }
            return best;
        }
    }
    findBestMove(board, level) {
        let bestVal = -1000;
        let bestMove = { i: -1, j: -1 };
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === "") {
                    board[i][j] = this._computer;
                    let moveVal = this.minimax(board, 0, false, level);
                    board[i][j] = "";
                    if (moveVal > bestVal) {
                        bestMove.i = i;
                        bestMove.j = j;
                        bestVal = moveVal;
                    }
                }
            }
        }
        return bestMove;
    }
    getStep(position, level) {
        const step = this.findBestMove(position, level);
        if (step.i !== -1 && step.j !== -1)
            return [step.i, step.j];
        return undefined;
    }
}
exports.default = GameLogic;
//# sourceMappingURL=gameLogic.js.map