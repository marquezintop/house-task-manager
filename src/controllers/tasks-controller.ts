import { Request, Response } from "express";
import { TaskCreated } from "../protocols";
import { existingUserId, taskNameExists } from "../services/tasks-service";
import { postTask } from "../repositories/tasks-repository";

export async function createTask(req: Request, res: Response) {
    const task = req.body as TaskCreated;
    try {
        await taskNameExists(task.name);
        await existingUserId(task.userId);
        await postTask(task) 
        console.log('oi')

        res.sendStatus(201);
    } catch (err: any) {
        console.log(err)
        if (err.type === "userIdDoesNotExist") return res.status(409).send(err.message);
        if (err.type === "nameIsNotUnique") return res.status(409).send(err.message);
        res.status(500).send(err);
    }
}