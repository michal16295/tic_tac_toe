import { Request, Response } from "express";
import { Player, Login } from "./model";
import userServices from "./service";

const createUser = (req: Request, res: Response) => {
  const data = req.body;
  let response = userServices.instance.addPlayer(data);
  res.status(response.status).send(response.data);
};
const getUsers = (req: Request, res: Response) => {
  let response = userServices.instance.getPlayers();
  res.status(response.status).send(response.data);
};

export default { createUser, getUsers };
