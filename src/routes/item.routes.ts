import { Router } from "express";
import { itemController } from "../controllers/item.controller";

const router = Router();

router.get("/items", itemController.getAll);
router.get("/items/:name", itemController.getByName);
router.post("/items", itemController.create);
router.put("/items/:name", itemController.updateByName);
router.delete("/items/:name", itemController.deleteByName);

export default router;
