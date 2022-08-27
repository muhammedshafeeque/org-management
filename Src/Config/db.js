const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    
    const conn = await mongoose.connect(process.env.NODE_ENV==="production"?process.env.MONGO_URI:process.env.MONGO_URL);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
module.exports = connectDB;
