import express, {Express, Request, Response} from "express";

const app: Express = express();
const port: number = 3000;
let counter: number = 0;

app.get("/", (req: Request, res: Response) => {
    res.send(`Express + TypeScript Server: ${counter}`);
    counter++;
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    console.log("Hello World!");
});
