import { Request, Response, NextFunction } from "express";

export interface MyRequest extends Request {
  user: any;
}

export const validateRegisterBody = (
  req: MyRequest,
  res: Response,
  next: NextFunction
) => {
  const { first_name, last_name, email, password } = req.body;

  if (!first_name || !last_name || !email || !password) {
    res.status(400).json({ message: "All fields are required!" });
  } else {
    req.user = req.body;
    next();
  }
};

// (req as any).user
