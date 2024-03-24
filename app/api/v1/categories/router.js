const express = require("express");
const router = express.Router();
const { create, index, findbasedId, update, destroy } = require("./controller");
const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");

// RESTFUL API
router.get("/categories", authenticateUser, authorizeRoles("organizer"), index);
router.post("/categories", authenticateUser, create);
router.get("/categories/:id", authenticateUser, findbasedId);
router.put("/categories/:id", authenticateUser, update);
router.delete("/categories/:id", authenticateUser, destroy);

module.exports = router;
