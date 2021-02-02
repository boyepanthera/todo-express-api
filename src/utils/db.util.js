import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const ConnectToDB = async () => {
  try {
    await mongoose.connect(process.env.OfflineDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    return console.log("connected");
  } catch (err) {
    return console.log(err);
  }
};
