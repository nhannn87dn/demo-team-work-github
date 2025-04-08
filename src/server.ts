import app from "./app";
import mongoose from "mongoose";
const PORT = process.env.PORT || 8080;

const MONGO_CONNECTION_STRING = 'mongodb+srv://nhan:<db_password>@mongodbnodejs.51dpy.mongodb.net/?retryWrites=true&w=majority&appName=MongodbNodeJs'

mongoose
  .connect(MONGO_CONNECTION_STRING)

  .then(() => {
    console.log("Connected to MongoDB");
    //should listen app here
    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    })
  })
  .catch((err) => {
    console.error("Failed to Connect to MongoDB", err);
  });

