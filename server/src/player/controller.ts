import { Request, Response } from "express";
import { Player, Login } from "./model";
import gameServices from "../game/service";

const createUser = (req: Request, res: Response) => {
  try {
    res.json({ id: gameServices.instance.addPlayer(req.body) });
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

const getUsers = (req: Request, res: Response) => {
  try {
    res.json({ id: gameServices.instance.getPlayers() });
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

export default { createUser, getUsers };
