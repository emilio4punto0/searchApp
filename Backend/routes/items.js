import express from "express";
import middlewareItemsData from "../controls/items.control.js";

const itemsRouter = express.Router();

itemsRouter.get("/api/items/:search", middlewareItemsData);

export default itemsRouter;
