import { Request, Response } from "express";
import { Player, Login } from "./model";
import gameServices from "../game/service";

const createUser = (req: Request, res: Response) => {
  try {
    console.log(`Creating new player ${req.body.name}`);
    res.json({ id: gameServices.instance.addPlayer(req.body) });
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

const getUsers = (req: Request, res: Response) => {
  try {
    console.log(`Get all users`);
    res.json({ id: gameServices.instance.getPlayers() });
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

export default { createUser, getUsers };
