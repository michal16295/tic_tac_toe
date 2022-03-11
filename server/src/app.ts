import express from "express";
import { configure } from "./start/middlewares";
import player from "./player/routes";
import game from "./game/routes";
import apis from "./start/routes";

const app = express();
const port = 8080;

configure(app);

apis(app);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
