import express, { Router, Request, Response } from "express";
const authRouter: Router = express.Router();

authRouter.get("/", (req: Request, res: Response) => {
  res.json("Auth Router Works!");
});

export default authRouter;
