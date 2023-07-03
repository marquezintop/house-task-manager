import { getTask } from "../repositories/tasks-repository";
import { getUserById } from "../repositories/users-repository";

export async function existingUserId(userId: number) {
    const isUser = await getUserById(userId);
    console.log(isUser)
    if (!isUser) throw {
        type: "userIdDoesNotExist",
        message: "This user doesn't exist"
    }
}

export async function taskNameExists (name: string) {
    const isName = await getTask(name);
    if (isName) throw {
        type: "nameIsNotUnique",
        message: "This name is already in use"
    };
}