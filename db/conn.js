// const { MongoClient } = require("mongodb");
const MONGO_URI="mongodb+srv://deepdyadav:anushka06@cluster0.8znd3pm.mongodb.net/healthUP"
const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);
// require("dotenv").config();

const client = mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log("Error: ", error);

    return error;
  });

module.exports = client;
