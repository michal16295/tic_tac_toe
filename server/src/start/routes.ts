// This configs all routes
import player from "../player/routes";

export default (app: any) => {
  // All the APIs will go here

  app.use("/player", player);
};
