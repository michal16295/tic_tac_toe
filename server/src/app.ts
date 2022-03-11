import express from "express";
import { configure } from "./startup/middlewares";

const app = express();
const port = 3000;

configure(app);
require("./startup/routes")(app);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
