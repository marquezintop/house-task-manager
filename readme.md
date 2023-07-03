# House Task Manager - Back-end

Back-end for House Task, a task management solution.

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Create a PostgreSQL database with whatever name you want and paste the dump.sql at it.
4. Configure the `.env` file using the `.env.example` 

5. Now just run the test locally with ThunderClient, we have these next routes already included:
    - Post user (http://localhost:5000/users, POST Method) to insert a new user onto the table with this
    body request: {"name": "Bernardo"};
    - Get users (http://localhost:5000/users, GET Method) to get all the users on the table users;
    - Post task (http://localhost:5000/tasks, POST Method) to insert a new task onto the table with this
    body request: {"name": "task 1", "description" "description 1", "userId": "1", "status": "false"};
    - Get tasks (http://localhost:5000/tasks, GET Method) to get all the tasks on the table tasks;
    - Update task (http://localhost:5000/tasks, UPDATE/PUT Method) to update the status of a determined
    task, to change to true (finished) or false (not finished yet) with this body request with one of the task's id: {"id": "1"};
    - Delete task (http://localhost:5000/tasks, DELETE Method) to delete a determined task with its id, the body request is the same as the UPDATE Method.