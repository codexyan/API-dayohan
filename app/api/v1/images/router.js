const express = require("express");
const router = express.Router();
const { create } = require("./controller");
const upload = require("../../../middlewares/multer")

// RESTFULL API
router.post("/images", upload.single("avatar"), create);

module.exports = router;