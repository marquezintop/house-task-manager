import { connection } from "../database/database"
import { User, UserCreated } from "../protocols"

export async function postUser(name: string) {
    await connection.query<UserCreated>(`
    INSERT INTO users (name)
    VALUES ($1)
    `, [name]);
}

export async function getUsers() {
    const result = await connection.query<User[]>(`
    SELECT * FROM users;
    `)

    return result.rows;
}

export async function getUser(name: string) {
    const result = await connection.query<User>(`
    SELECT * FROM users
    WHERE name = $1;
    `, [name])

    return result.rows[0];
}

export async function getUserById(userId: number) {
    const result = await connection.query<User>(`
    SELECT * FROM users
    WHERE id = $1;
    `, [userId])

    return result.rows[0];
}