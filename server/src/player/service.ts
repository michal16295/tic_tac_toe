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

  addPlayer(player: Player) {
    try {
      if ((player?.name || "").trim() === "")
        return responseError(404, "Invalid name");

      const id = new Date().valueOf();
      const data = { id };
      this._players.push({ ...player, id: id, score: 0 });
      return responseSuccess(data);
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

  getPlayers() {
    try {
      let data = { players: this._players };
      return responseSuccess(data);
    } catch (e) {
      return responseError(500, SERVER_ERROR);
    }
  }

  getPlayer(id: number): object {
    try {
      return responseSuccess(this._players.find((x) => x.id === id));
    } catch (error) {
      return responseError(500, SERVER_ERROR);
    }
  }
}

export default PlayerService;
