const express = require("express");
const {
    signup,
    activeParticipant,
    signin,
    getAllLandingPage,
    getDetailLandingPage,
    getDashboard,
    checkout,
} = require("./controller");
const { authenticateParticipant } = require("../../../middlewares/auth");
const router = express();

router.post("/auth/signup", signup);
router.put("/active", activeParticipant);
router.post("/auth/signin", signin);
router.get("/events", getAllLandingPage);
router.get("/events/:id", getDetailLandingPage);
router.get("/orders", authenticateParticipant, getDashboard);
router.post("/checkout", authenticateParticipant, checkout);

module.exports = router;
