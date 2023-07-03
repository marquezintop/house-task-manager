import { Router } from "express";
import { createUser, readUsers } from "../controllers/users-controller";
import { validateSchema } from "../middlewares/validateSchema";
import { userSchema } from "../schemas/users-schema";


const userRouter = Router();

userRouter.post("/users", validateSchema(userSchema),createUser);
userRouter.get("/users", readUsers);

export default userRouter;