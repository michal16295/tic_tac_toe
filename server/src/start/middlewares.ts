import cors from "cors";
import express from "express";
import compression from "compression";
import Useragent from "express-useragent";

// This will configure all middlewares
const configure = (app: any) => {
  app.use(compression());
  app.use(Useragent.express());
  app.set("view engine", "ejs");
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
  app.set("trust proxy", true);
  app.use(express.json());
};

export { configure };
