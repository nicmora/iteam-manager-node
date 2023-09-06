import { Router } from "express";
import { itemController } from "../controllers/item.controller";

const router = Router();

router.get("/items", itemController.getAll);
router.get("/item/:name", itemController.getByName);
router.post("/item", itemController.create);
router.put("/item/:name", itemController.updateByName);
router.delete("/item/:name", itemController.deleteByName);

export default router;
