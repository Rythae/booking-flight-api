const express = require("express");

const router = express.Router();
const controller = require("../controllers/flightController");

router.get("/flights", controller.getAll);
router.post("/flights", controller.create);
router.get("/flights/:id", controller.getOne);
router.put("/flights/:id", controller.updateOne);
router.delete("/flights/:id", controller.deleteOne);

module.exports = router;
