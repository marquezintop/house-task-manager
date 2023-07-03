import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema";
import { taskSchema } from "../schemas/tasks-schema";
import { createTask } from "../controllers/tasks-controller";


const taskRouter = Router();

taskRouter.post("/tasks", validateSchema(taskSchema), createTask);

export default taskRouter