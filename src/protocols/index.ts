export type User = {
    id: number;
    name: string
};

export type Task = {
    id: number,
    name: string,
    description: string,
    userId: number,
    status: boolean
}

export type UserCreated = Omit<User, "id">;

export type TaskCreated = Omit<Task, "id">;