import { getUser } from "../repositories/users-repository";

export async function userNameExists(name: string) {
    const isName = await getUser(name);
    if (isName) throw {
        type: "nameIsNotUnique",
        message: "This name is already in use"
    };
}