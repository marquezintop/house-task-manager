import { Router } from "express";
import userRouter from "./users-route";


const router = Router();
router.use(userRouter);

export default router;