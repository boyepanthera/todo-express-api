import mongoose from "mongoose";

export const ConnectToDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/todo-api-db", {
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
