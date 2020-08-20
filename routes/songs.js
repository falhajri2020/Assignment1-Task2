const router = require("express").Router();
const Song = require("../models/Song");


// @route        GET   songs/
// @description     dump songs to db
// @access          Public
router.get("/", async (req, res) => {
  try {
    const songs = await Song.find({});
    res.status(200).json({ data: songs, error: null });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ data: null, error: "Some server error" });
  }
});

module.exports = router;
