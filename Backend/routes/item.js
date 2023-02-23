import express from "express";
import middlewareItemData from "../controls/item.control.js";
const itemRouter = express.Router();

itemRouter.get("/api/item/:id", middlewareItemData);

export default itemRouter;
