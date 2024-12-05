import express from "express";
import bookRoute from "./testRoutes";

const router = express.Router();

router.use("/test", bookRoute);

export default router;