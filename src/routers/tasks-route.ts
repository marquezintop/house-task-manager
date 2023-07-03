import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema";
import { taskIdSchema, taskSchema } from "../schemas/tasks-schema";
import { createTask, deleteTask, readTasks, updateTask } from "../controllers/tasks-controller";


const taskRouter = Router();

taskRouter.post("/tasks", validateSchema(taskSchema), createTask);
taskRouter.get("/tasks", readTasks);
taskRouter.put("/tasks", validateSchema(taskIdSchema), updateTask);
taskRouter.delete("/tasks", validateSchema(taskIdSchema), deleteTask);

export default taskRouter;