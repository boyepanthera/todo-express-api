import mongoose from "mongoose";
import { v4 as uuid } from "uuid";
import SoftDelete from "mongoose-delete";

const TodoSchema = new mongoose.Schema({
  _id: {
    type: "object",
    value: { type: "Buffer" },
    default: () => uuid(),
  },
  title: { type: String, default: "" },
  description: { type: String, default: "" },
  startTime: { type: Date },
  endTime: { type: Date },
});

TodoSchema.plugin(SoftDelete);

export const Todo = mongoose.model("Todo", TodoSchema);
