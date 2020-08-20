const Song = require("../models/Song");

module.exports = async (req, res, next) => {
  try {
    const songs = [
      {
        name: "song-a",
        description: "Satisfying Tune",
      },
      {
        name: "song-b",
        description: "Ertugrul Tune",
      },
      {
        name: "song-c",
        description: "Iphone Tune",
      },
      {
        name: "song-d",
        description: "BlackBerry Tune",
      },
      {
        name: "song-e",
        description: "Drama Tune",
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
