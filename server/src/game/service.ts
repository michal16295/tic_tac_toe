import { Board, StepRequest, StepResponse, Winner } from "./model";
import { Player } from "../player/model";

class GameService {
  private constructor() {}
  private static _instance: GameService;
  static get instance(): GameService {
    if (!this._instance) this._instance = new GameService();

    return this._instance;
  }

  private _players: Player[] = [];
  private _boards: Map<number, Board> = new Map();

  private checkWiner(board: Board, fig: "X" | "O"): boolean {
    const arr = [0, 0, 0];
    let sum0 = 0;
    let sum1 = 0;
    for (let i = 0; i < board.position.length; i++) {
      let index = 0;
      for (let j = 0; j < board.position[i].length; j++) {
        if (board.position[i][j] !== fig) continue;
        index++;
        arr[j]++;
        if (i === j) sum0++;
        if (j === 2 - i) sum1++;
      }
      if (index === 3) return true;
    }
    return !!arr.find((x) => x === 3) || sum0 === 3 || sum1 === 3;
  }

  private getEnableSteps(board: Board): number[] | any {
    return board.position.reduce((acc, cur, index) => {
      return [
        ...acc,
        ...cur.map((x, i) => [index, i]).filter((x) => !cur[x[1]]),
      ];
    }, []);
  }

  private getRandomStep(board: Board): number[] {
    const steps = this.getEnableSteps(board);
    if (!steps.length) return undefined;
    return steps[Math.floor(Math.random() * steps.length)];
  }

  addPlayer(player: Player): number {
    if ((player?.name || "").trim() === "") return 0;

    const id = new Date().valueOf();
    this._players.push({ ...player, id: id, score: 0 });
    return id;
  }

  deletePlayer(id: number): void {
    this._players = this._players.filter((x) => x.id !== id);
  }

  getPlayers(): Player[] {
    return this._players;
  }

  getPlayer(id: number): Player {
    return this._players.find((x) => x.id === id);
  }

  newGame(id: number): Board {
    if (!this.getPlayer(id)) return undefined;

    this._boards.set(id, new Board());
    return this._boards.get(id);
  }

  stepProc(step: StepRequest): StepResponse {
    if (!this._boards.has(step.id)) return undefined;

    const board = this._boards.get(step.id);
    board.position[step.i][step.j] = "X";

    if (this.checkWiner(board, "X")) {
      this.getPlayer(step.id).score += 100;
      return { winner: Winner.player };
    }

    const compStep = this.getRandomStep(board);
    if (!compStep?.length) {
      this.getPlayer(step.id).score += 10;
      return { winner: Winner.tie };
    }

    board.position[compStep[0]][compStep[1]] = "O";

    if (this.checkWiner(board, "O"))
      return { i: compStep[0], j: compStep[1], winner: Winner.computer };

    return { i: compStep[0], j: compStep[1], winner: Winner.none };
  }
}

export default GameService;