const express = require("express");
const router = express.Router();
const { create, index, findbasedId, update, destroy } = require("./controller");
const { authenticateUser } = require("../../../middlewares/auth");

// RESTFULL API
router.get("/categories", authenticateUser , index);
router.post("/categories", authenticateUser, create);
router.get("/categories/:id", findbasedId);
router.put("/categories/:id", update);
router.delete("/categories/:id", destroy);

module.exports = router;
