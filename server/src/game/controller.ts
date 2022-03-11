import { Request, Response } from "express";
import gameServices from "./service";

const newGame = (req: Request, res: Response) => {
  try {
    res.json(gameServices.instance.newGame(req.body.id));
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

const step = (req: Request, res: Response) => {
  try {
    res.json(gameServices.instance.stepProc(req.body));
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

export default { step, newGame };
