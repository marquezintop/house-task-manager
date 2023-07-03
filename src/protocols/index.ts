export type User = {
    id: number;
    name: string
};

export type UserCreated = Omit<User, "id">