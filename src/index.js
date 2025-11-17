import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./database/db";
dotenv.config();

const app = express();
const port = process.env.PORT ?? 3000;



app.use(express.json());


app.use((err, req, res, next) => {
    if(process.env.NODE_ENV === 'development') console.error(err);
    res.status(err.status || 500).json({ message: err.message });
});

async function start() {
    try {
        await connectDB();

        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    } catch (err) {
        console.error('Failed to start app', err);
    }
}

start();