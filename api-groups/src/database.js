const mongoose = require("mongoose");

async function connect() {
  await mongoose.connect(
    `mongodb://${process.env.DB_HOST}`
  );
  console.log("Database: Connected");
}

module.exports = { connect };