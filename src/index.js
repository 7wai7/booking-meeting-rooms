import dotenv from "dotenv";
import express from "express";
import authRouter from "./auth/auth.router.js";
dotenv.config();

const app = express();
const port = process.env.PORT ?? 3000;



app.use(express.json());

app.use("/api/auth", authRouter)

app.use((err, req, res, next) => {
    if(process.env.NODE_ENV === 'development') console.error(err);
    res.status(err.status || 500).json({ message: err.message });
});

async function start() {
    try {
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    } catch (err) {
        console.error('Failed to start app', err);
    }
}

start();