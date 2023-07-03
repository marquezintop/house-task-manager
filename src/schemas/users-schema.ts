import Joi from "joi";
import { UserCreated } from "../protocols";

export const userSchema = Joi.object<UserCreated>({
    name: Joi.string().required(),
})