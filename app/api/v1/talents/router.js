const express = require("express");
const { index, find, update, destroy, create } = require("./controller");
const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");
const router = express();

router.get("/talents", authenticateUser, authorizeRoles("organizer"), index);
router.get("/talents/:id", authenticateUser, authorizeRoles("organizer"), find);
router.put(
  "/talents/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  update
);
router.delete(
  "/talents/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  destroy
);
router.post("/talents", authenticateUser, authorizeRoles("organizer"), create);

module.exports = router;
