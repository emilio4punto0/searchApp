import express from "express";
import cors from "cors";
import morgan from "morgan";

import itemRouter from "./routes/item.js";
import itemsRouter from "./routes/items.js";

const app = express();
const corsWhiteList = "http://localhost:5173";

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: corsWhiteList,
  })
);

app.use(itemsRouter);
app.use(itemRouter);

app.listen(3000);
