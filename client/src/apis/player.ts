import httpService from "./httpService";
import routes from "./routes.json";

export const createPlayer = async (name: string) => {
  try {
    const res = await httpService.post(routes.CREATE_PLAYER, { name });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
