import express, { Router, Request, Response } from "express";
const authRouter: Router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

authRouter.get("/", (req: Request, res: Response) => {
  res.json("Auth Router Works!");
});

export default authRouter;
