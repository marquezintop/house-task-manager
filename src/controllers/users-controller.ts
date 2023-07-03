import { Request, Response } from 'express';
import { UserCreated } from '../protocols';
import { userNameExists } from '../services/users-service';
import { getUsers, postUser } from '../repositories/users-repository';

export async function createUser(req: Request, res: Response) {
    const user = req.body as UserCreated
    try {
        await userNameExists(user.name);
        await postUser(user.name)

        res.sendStatus(201);
    } catch(err: any) {
        if (err.type === "nameIsNotUnique") return res.status(409).send(err.message);
        res.status(500).send(err);
    }
}

export async function readUsers(req: Request, res: Response) {
    try {
        const users = await getUsers();

        res.send(users).status(200)
    } catch(err: any) {
        res.status(500).send(err);
    }
}