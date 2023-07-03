import Joi from "joi";
import { TaskCreated } from "../protocols";

export const taskSchema = Joi.object<TaskCreated>({
    name: Joi.string().required(),
    description: Joi.string().required(),
    userId: Joi.number().integer().required(),
    status: Joi.boolean().required()
})