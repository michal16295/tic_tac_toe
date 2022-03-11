import { Request, Response } from "express";
import gameServices from "./service";

const newGame = (req: Request, res: Response) => {
  try {
    console.log(`New Game userId: ${req.body.id}`);
    res.json(gameServices.instance.newGame(req.body.id));
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

const step = (req: Request, res: Response) => {
  try {
    console.log(`Making a step`);
    res.json(gameServices.instance.stepProc(req.body));
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

export default { step, newGame };
