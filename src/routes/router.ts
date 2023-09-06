import { Router } from "express";
import ItemRoutes from "./item.routes";

const router = Router();

// health
router.get("/health", (req, res) => {
  res.send("Application Started");
});

// routes
router.use("/api/v1", ItemRoutes);

export default router;
