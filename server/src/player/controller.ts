import { Request, Response } from "express";
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
    res.json(gameServices.instance.getPlayers());
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

const getUser = (req: Request, res: Response) => {
  try {
    console.log(`Get user id: ${req.params.id}`);
    res.json(gameServices.instance.getPlayer(req.params.id));
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

export default { createUser, getUsers, getUser };
