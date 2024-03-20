const express = require("express");
const { createCMSOrganizer } = require("./controller");
const router = express();

router.post("/organizers", createCMSOrganizer);

module.exports = router;
