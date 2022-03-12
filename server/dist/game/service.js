"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const gameLogic_1 = __importDefault(require("./gameLogic"));
class GameService {
    constructor() {
        this._players = [];
        this._boards = new Map();
        this._gameLogic = new gameLogic_1.default();
    }
    static get instance() {
        if (!this._instance)
            this._instance = new GameService();
        return this._instance;
    }
    checkWinner(board, fig) {
        const arr = [0, 0, 0];
        let sum0 = 0;
        let sum1 = 0;
        for (let i = 0; i < board.position.length; i++) {
            let index = 0;
            for (let j = 0; j < board.position[i].length; j++) {
                if (board.position[i][j] !== fig)
                    continue;
                index++;
                arr[j]++;
                if (i === j)
                    sum0++;
                if (j === 2 - i)
                    sum1++;
            }
            if (index === 3)
                return true;
        }
        return !!arr.find((x) => x === 3) || sum0 === 3 || sum1 === 3;
    }
    getEnableSteps(board) {
        return board.position.reduce((acc, cur, index) => {
            return [
                ...acc,
                ...cur.map((x, i) => [index, i]).filter((x) => !cur[x[1]]),
            ];
        }, []);
    }
    getRandomStep(board) {
        const steps = this.getEnableSteps(board);
        if (!steps.length)
            return undefined;
        return steps[Math.floor(Math.random() * steps.length)];
    }
    addPlayer(player) {
        if (((player === null || player === void 0 ? void 0 : player.name) || "").trim() === "")
            return undefined;
        const id = new Date().valueOf().toString();
        this._players.push(Object.assign(Object.assign({}, player), { id: id, score: 0, computerScore: 0 }));
        return id;
    }
    deletePlayer(id) {
        this._players = this._players.filter((x) => x.id !== id);
    }
    getPlayers() {
        return this._players.sort((a, b) => b.score - a.score).slice(0, 10);
    }
    getPlayer(id) {
        return this._players.find((x) => x.id === id);
    }
    newGame(id) {
        if (!this.getPlayer(id))
            return undefined;
        this._boards.set(id, new model_1.Board());
        return this._boards.get(id);
    }
    changeDifficulty(id, level) {
        let player = this.getPlayer(id);
        player.level = level;
        return player;
    }
    stepProc(step) {
        if (!this._boards.has(step.id))
            return undefined;
        const player = this.getPlayer(step.id);
        const board = this._boards.get(step.id);
        if (board.position[step.i][step.j] !== "")
            return undefined;
        board.position[step.i][step.j] = "X";
        if (this.checkWinner(board, "X")) {
            player.score += 100;
            return { winner: model_1.Winner.player };
        }
        const compStep = player.level === 0
            ? this.getRandomStep(board)
            : this._gameLogic.getStep(board.position, player.level);
        if (!(compStep === null || compStep === void 0 ? void 0 : compStep.length)) {
            player.score += 10;
            player.computerScore += 10;
            return { winner: model_1.Winner.tie };
        }
        board.position[compStep[0]][compStep[1]] = "O";
        if (this.checkWinner(board, "O")) {
            player.computerScore += 100;
            return { board, winner: model_1.Winner.computer };
        }
        return { board, winner: model_1.Winner.none };
    }
}
exports.default = GameService;
//# sourceMappingURL=service.js.map