const express = require("express");
const { index, find, update, destroy, create } = require("./controller");
const router = express();

router.get("/events", index)
router.get("/events/:id", find)
router.put("/events/:id", update)
router.delete("/events/:id", destroy)
router.post("/events", create)

module.exports = router;
