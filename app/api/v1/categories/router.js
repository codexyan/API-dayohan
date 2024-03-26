const express = require("express");
const router = express.Router();
const { create, index, findbasedId, update, destroy } = require("./controller");
const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");

// RESTFUL API
router.get("/categories", authenticateUser, authorizeRoles("organizer"), index);
router.post(
  "/categories",
  authenticateUser,
  authorizeRoles("organizer"),
  create
);
router.get(
  "/categories/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  findbasedId
);
router.put(
  "/categories/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  update
);
router.delete(
  "/categories/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  destroy
);

module.exports = router;
