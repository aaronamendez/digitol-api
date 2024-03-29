import dotenv from "dotenv";
dotenv.config();
import express, { Application } from "express";
import userRouter from "./routes/userRoutes";
import authRouter from "./routes/authRoutes";
const server: Application = express();

server.use(express.json());

server.use("/api/users", userRouter);
server.use("/api/auth", authRouter);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`|| Server Running || PORT=${PORT}`);
});
