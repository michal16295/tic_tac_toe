import httpService from "./httpService";
import routes from "./routes";

export const newGame = async (id: number): Promise<any> => {
  try {
    const res = await httpService.post(routes.NEW_GAME, { id });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
