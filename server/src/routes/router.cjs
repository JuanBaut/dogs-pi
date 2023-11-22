const Router = require("express");
const dogRouter = require("./dogRouter.cjs");
const moodRouter = require("./moodRouter.cjs");

const router = Router();

router.use("/dogs", dogRouter);
router.use("/mood", moodRouter);

module.exports = router;
