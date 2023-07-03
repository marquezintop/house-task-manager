import { Request, Response } from 'express';
import { UserCreated } from '../protocols';
import { NameExists } from '../services/users-service';
import { postUser } from '../repositories/users-repository';

export async function createUser(req: Request, res: Response) {
    const user = req.body as UserCreated
    try {
        await NameExists(user.name);
        await postUser(user.name)

        res.sendStatus(201);
    } catch(err: any) {
        if (err.type === "nameIsNotUnique") res.status(409).send(err.message);
        res.status(500).send(err);
    }
}