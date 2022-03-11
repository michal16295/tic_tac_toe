// This configs all routes
import player from "../player/routes";

export default function (app: any) {
  // All the APIs will go here

  app.use("/player", player);
}
