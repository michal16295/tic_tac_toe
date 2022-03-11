import express from "express";
import controller from "./controller";

const router = express.Router();

router.post("/", controller.newGame);
router.put("/", controller.step);

export default router;
