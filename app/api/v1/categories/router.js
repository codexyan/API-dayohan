const express = require("express");
const router = express.Router();
const { create, index, findbasedId, update, destroy } = require("./controller");

// RESTFULL API
router.get("/categories", index);
router.post("/categories", create);
router.get("/categories/:id", findbasedId);
router.put("/categories/:id", update);
router.delete("/categories/:id", destroy);

module.exports = router;
