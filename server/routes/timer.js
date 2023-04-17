import express from "express";
// middlewares
import { requireSignin, isAdmin } from "../middlewares/auth.js";

import { getStartTime } from "../controllers/timer.js";

const router = express.Router();

router.get("/getST", requireSignin, getStartTime);




export default router;