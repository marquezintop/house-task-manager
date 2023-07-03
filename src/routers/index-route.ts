import { Router } from "express";
import userRouter from "./users-route";
import taskRouter from "./tasks-route";


const router = Router();
router.use(userRouter);
router.use(taskRouter);

export default router;