import { Router } from "express";
import ItemRoutes from "./item.routes";

const router = Router();

// health
router.get("/mean-compose/health", (req, res) => {
  res.send("Application Started");
});

// routes
router.use("/mean-compose/api/v1", ItemRoutes);

export default router;
