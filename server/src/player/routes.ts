import express from "express";
import controller from "./controller";

const router = express.Router();

router.post("/", controller.createUser);
router.get("/", controller.getUsers);
router.get("/:id", controller.getUser);

export default router;
