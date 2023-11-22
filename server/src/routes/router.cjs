const Router = require("express");
const dogRouter = require("./dogRouter.cjs");

const router = Router();

router.use("/dog", dogRouter);

module.exports = router;
