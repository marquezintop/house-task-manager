import { connection } from "../database/database";
import { Task, TaskCreated } from "../protocols";

export async function postTask(task: TaskCreated) {
    await connection.query<TaskCreated>(`
    INSERT INTO tasks (name, description, "userId", status)
    VALUES ($1, $2, $3, $4)
    `, [task.name, task.description, task.userId, task.status]);
}

export async function getTask(name: string) {
    const result = await connection.query<Task>(`
    SELECT * FROM tasks
    WHERE name = $1;
    `, [name])

    return result.rows[0];
}