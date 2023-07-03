import { Request, Response } from "express";
import { Task, TaskCreated } from "../protocols";
import { existingUserId, taskIdExists, taskNameExists } from "../services/tasks-service";
import { getTaskById, getTasks, postTask, putTask, removeTask } from "../repositories/tasks-repository";

export async function createTask(req: Request, res: Response) {
    const task = req.body as TaskCreated;
    try {
        await taskNameExists(task.name);
        await existingUserId(task.userId);
        await postTask(task) 

        res.sendStatus(201);
    } catch (err: any) {
        if (err.type === "userIdDoesNotExist") return res.status(409).send(err.message);
        if (err.type === "nameIsNotUnique") return res.status(409).send(err.message);
        res.status(500).send(err);
    }
}

export async function readTasks(req: Request, res: Response) {
    try {
        const tasks = await getTasks();

        res.send(tasks).status(200)
    } catch(err: any) {
        res.status(500).send(err);
    }
}

export async function updateTask(req: Request, res: Response) {
    const taskId: number = req.body.id;

    try {
        await taskIdExists(taskId);
        const taskOutdated = await getTaskById(taskId) as Task;
        await putTask(taskId, taskOutdated);

        res.sendStatus(204)
    } catch (err: any) {
        if (err.type === "taskIdDoesNotExist") return res.status(409).send(err.message);
        res.status(500).send(err);
    }
}

export async function deleteTask(req: Request, res: Response) {
    const taskId: number = req.body.id;

    try {
        await taskIdExists(taskId);
        await removeTask(taskId);

        res.sendStatus(204);
    } catch (err: any) {
        if (err.type === "taskIdDoesNotExist") return res.status(409).send(err.message);
        res.status(500).send(err);
    }
}