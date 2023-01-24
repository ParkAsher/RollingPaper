const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const dotenv = require("dotenv");
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongoDB Connection Success");
    })
    .catch((err) => {
      console.log(err);
    });
};

mongoose.connection.on("error", (err) => {
  console.error("MongoDB Connection Error", err);
});

module.exports = connect;
