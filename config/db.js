const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost/spotify", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('mongoDb connected')
  } catch (error) {
    console.log("Db connection error", error.message);
    process.exit(1);
  }
};

module.exports = dbConnect;
