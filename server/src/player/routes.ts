import express from "express";
import controller from "./controller";

const router = express.Router();

router.post("/", controller.createUser);
router.get("/", controller.getUsers);

export default router;
