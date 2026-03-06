const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listings.js"); // ✅ singular if model is Listing

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connected to DB");

    await initDB();
    mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
}
const initDB = async () => {
  await Listing.deleteMany({}); 
  initData.data = initData.data.map((obj)=> ({...obj, owner : '699d631b14c852906e76ac06'}));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};
main();