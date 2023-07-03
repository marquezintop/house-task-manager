import { connection } from "../database/database";
import { Task, TaskCreated } from "../protocols";

export async function postTask(task: TaskCreated) {
    await connection.query<Task>(`
    INSERT INTO tasks (name, description, "userId", status)
    VALUES ($1, $2, $3, $4)
    `, [task.name, task.description, task.userId, task.status]);
}

export async function getTasks() {
    const result = await connection.query<Task[]>(`
    SELECT * FROM tasks
    ORDER BY id;
    `)

    return result.rows;
}

export async function getTask(name: string) {
    const result = await connection.query<Task>(`
    SELECT * FROM tasks
    WHERE name = $1;
    `, [name])

    return result.rows[0];
}

export async function getTaskById(id: number) {
    const result = await connection.query<Task>(`
    SELECT * FROM tasks
    WHERE id = $1;
    `, [id]);

    return result.rows[0]
}

export async function putTask(taskId: number, taskOutdated: Task) {
    const newStatus: boolean = !taskOutdated.status

    await connection.query<Task>(`
    UPDATE tasks 
    SET status = $1
    WHERE id = $2
    `, [newStatus, taskId]);
}

export async function removeTask(taskId: number) {
    await connection.query<Task>(`
    DELETE FROM tasks
    WHERE id = $1
    `, [taskId]);
}