import httpService from "./httpService";
import routes from "./routes";
import { StepRequest, StepResponse } from "../types/game";

export const newGame = async (id: string): Promise<any> => {
  try {
    const res = await httpService.post(routes.NEW_GAME, { id });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const makeMove = async (data: StepRequest): Promise<any> => {
  try {
    const res = await httpService.put(routes.MAKE_MOVE, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
