import express, { Application } from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
const server = express();
dotenv.config();

server.use("/api/users", userRoutes);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
