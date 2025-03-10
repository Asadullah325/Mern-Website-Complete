import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.router.js";
import contactRouter from "./routes/contact.router.js";
import connectDB from "./config/database.config.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cors from "cors";
const app = express();
dotenv.config();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);
app.use(cors());


app.use(errorMiddleware)
const PORT = process.env.PORT || 5000;

connectDB().then(
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
)
