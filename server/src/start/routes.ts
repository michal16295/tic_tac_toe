// This configs all routes
import player from "../player/routes";
import game from "../game/routes";

export default function (app: any) {
  // All the APIs will go here

  app.use("/player", player);
  app.use("/game", game);
}
