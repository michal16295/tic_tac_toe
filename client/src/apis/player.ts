import { Player } from "../types/player";
import httpService from "./httpService";
import routes from "./routes";

export const createPlayer = async (
  name: string,
  level: number
): Promise<Player | undefined> => {
  try {
    const res = await httpService.post(routes.CREATE_PLAYER, { name, level });
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

export const getPlayer = async (id: string): Promise<any> => {
  try {
    const res = await httpService.get(`${routes.GET_PLAYER_DATA}/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const changeDifficulty = async (
  id: string,
  level: number
): Promise<any> => {
  try {
    const res = await httpService.put(`${routes.CHANGE_DIFFICULTY}/${id}`, {
      level,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
