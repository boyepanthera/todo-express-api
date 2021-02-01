import express from "express";
import { router as TodoModule } from "./routes/todo.route.js";
import { ConnectToDB } from "./controllers/utils/db.util";
import { handleSuccessResponse } from "./controllers/utils/response.util.js";
import { name } from "../package.json";
ConnectToDB();
export const app = express();
app.use(express.json());

app.get("/", (req, res) =>
  handleSuccessResponse(res, `${name} api`, undefined, 200)
);

app.use("/api/v1/todo", TodoModule);
