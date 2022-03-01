import express, { Router, Request, Response, RequestHandler } from "express";
const authRouter: Router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import { MyRequest } from "../middleware/auth";

// Middleware
import { validateRegisterBody } from "../middleware/auth";

authRouter.get(
  "/register",
  validateRegisterBody as RequestHandler,
  (req: Request, res: Response) => {
    let myReq = req as MyRequest;
    res.json(myReq.user);
  }
);

export default authRouter;
