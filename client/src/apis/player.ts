import { Player } from "../types/player";
import httpService from "./httpService";
import routes from "./routes.json";

export const createPlayer = async (name: string): Promise<any> => {
  try {
    const res = await httpService.post(routes.CREATE_PLAYER, { name });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPlayers = async (): Promise<any> => {
  try {
    const res = await httpService.get(routes.GET_PLAYERS);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
