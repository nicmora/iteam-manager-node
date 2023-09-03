import { Router } from "express";
import Item from "../models/Item";

const router = Router();

router.get("/items", async (req, res) => {
  const result = await Item.find();
  res.send(result);
});

router.get("/items/:name", async (req, res) => {
  const name = req.body.name;

  const result = await Item.findOne({ name: name });
  res.send(result);
});

router.post("/items/create", async (req, res) => {
  const item = new Item({
    name: req.body.name,
    price: req.body.price,
  });

  const result = await item.save();
  res.send(result);
});

export default router;
