"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
class GameService {
    constructor() {
        this._players = [];
        this._boards = new Map();
    }
    static get instance() {
        if (!this._instance)
            this._instance = new GameService();
        return this._instance;
    }
    checkWiner(board, fig) {
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
        this._players.push(Object.assign(Object.assign({}, player), { id: id, score: 0 }));
        return id;
    }
    deletePlayer(id) {
        this._players = this._players.filter((x) => x.id !== id);
    }
    getPlayers() {
        return this._players.sort((a, b) => a.score - b.score);
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
    stepProc(step) {
        if (!this._boards.has(step.id))
            return undefined;
        const board = this._boards.get(step.id);
        board.position[step.i][step.j] = "X";
        if (this.checkWiner(board, "X")) {
            this.getPlayer(step.id).score += 100;
            return { winner: model_1.Winner.player };
        }
        const compStep = this.getRandomStep(board);
        if (!(compStep === null || compStep === void 0 ? void 0 : compStep.length)) {
            this.getPlayer(step.id).score += 10;
            return { winner: model_1.Winner.tie };
        }
        board.position[compStep[0]][compStep[1]] = "O";
        if (this.checkWiner(board, "O"))
            return { board, winner: model_1.Winner.computer };
        return { board, winner: model_1.Winner.none };
    }
}
exports.default = GameService;
//# sourceMappingURL=service.js.map