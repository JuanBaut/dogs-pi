const Router = require("express");
const {
  allDogsHandler,
  idHandler,
  nameHandler,
  createHandler,
} = require("../handlers/dogHandler.cjs");

const dogRouter = Router();

dogRouter.get("/", allDogsHandler);

dogRouter.get("/id/:id", idHandler);

dogRouter.get("/name?", nameHandler);

dogRouter.post("/create", createHandler);

module.exports = dogRouter;
