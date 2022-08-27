const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const connectDB=require('./Src/Config/db')
const routes=require('./Src/Routes');
const { notFound, errorHandler } = require("./Src/Middlewares/errorHandler");
// enable env
dotenv.config();

// enable cors
app.use(cors());

// parse json request body
app.use(express.json());

// connect MongoDB Using Mongoose
connectDB()
//  route
app.get("/", (req, res) => {
  res.status(200).send("Server Running");
});
app.use('/api',routes)
app.use(notFound)
app.use(errorHandler)
const Server = app.listen(process.env.PORT, () => {
  console.log("Server Running on  Port " + process.env.PORT);
});
