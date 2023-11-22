const Router = require("express");
const { moodHandler } = require("../handlers/moodHandler.cjs/");

const moodRouter = Router();

moodRouter.get("/", moodHandler);

module.exports = moodRouter;
