import express from "express";
import { router as TodoModule } from "./routes/todo.route.js";

const app = express();

app.use("/todo", TodoModule);
