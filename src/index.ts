import express, { json, Request, Response } from "express";
import router from "./routers/index-route";


const app = express();
app.use(json());
app.use(router);

app.get("/health", (req: Request, res: Response) => {
    res.status(200).send("It's working!")
});


const port: number = 5000;
app.listen(port, () => {
    console.log(`Running on ${port}!`)
});