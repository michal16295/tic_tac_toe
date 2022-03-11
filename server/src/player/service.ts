import { Player } from "./model";
import {
  responseSuccess,
  responseError,
  SERVER_ERROR,
} from "../common/response";
class PlayerService {
  private constructor() {}
  private static _instance: PlayerService;
  static get instance(): PlayerService {
    if (!this._instance) this._instance = new PlayerService();

    return this._instance;
  }

  private _players: Player[] = [];

  addPlayer(player: Player): object {
    try {
      if ((player?.name || "").trim() === "")
        return responseError(404, "Invalid name");

      const id = new Date().valueOf();
      this._players.push({ ...player, id: id, score: 0 });
      return responseSuccess({ id });
    } catch (e) {
      return responseError(500, SERVER_ERROR);
    }
  }

  deletePlayer(id: number): object {
    try {
      this._players = this._players.filter((x) => x.id !== id);
      return responseSuccess({ message: "Success" });
    } catch (e) {
      return responseError(500, SERVER_ERROR);
    }
  }

  getPlayers(): object {
    try {
      return responseSuccess(this._players);
    } catch (e) {
      return responseError(500, SERVER_ERROR);
    }
  }

  getPlayer(id: number): object {
    return this._players.find((x) => x.id === id);
  }
}

export default PlayerService;
