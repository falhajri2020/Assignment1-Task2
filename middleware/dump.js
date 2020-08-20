const Song = require("../models/Song");

module.exports = async (req, res, next) => {
  try {
    const songs = [
      {
        name: "song-a",
        description: "song-A description Lorem ipsum dolor sit amet.",
      },
      {
        name: "song-b",
        description: "song-B description Lorem ipsum dolor sit amet.",
      },
      {
        name: "song-c",
        description: "song-C description Lorem ipsum dolor sit amet.",
      },
      {
        name: "song-d",
        description: "song-D description Lorem ipsum dolor sit amet.",
      },
      {
        name: "song-e",
        description: "song-E description Lorem ipsum dolor sit amet.",
      },
    ];
    const count = await Song.find({}).countDocuments();
    console.log("count", count);
    if (count === 0) {
      new Promise((resolve, reject) => {
        songs.forEach(async (song, index) => {
          await new Song(song).save();
          if (songs.length - 1 === index) {
            resolve("all songs dumped intoDb");
          }
        });
      });

      console.log("Songs saved to Db");
      next();
    }else{
        console.log('data is already there.');
        next();
    }
  } catch (error) {
    console.log(error.message);
    next();
  }
};
