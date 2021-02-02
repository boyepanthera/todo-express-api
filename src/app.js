import express from "express";
import { router as TodoModule } from "./routes/todo.route.js";
import { ConnectToDB } from "./utils/db.util";
import { handleSuccessResponse } from "./controllers/helpers/response.util.js";
import dotenv from "dotenv";
import { name } from "../package.json";
ConnectToDB();
export const app = express();
dotenv.config();
app.use(express.json());

app.get("/", (req, res) =>
  handleSuccessResponse(res, `${name} api`, undefined, 200)
);

app.use("/api/v1/todo", TodoModule);
