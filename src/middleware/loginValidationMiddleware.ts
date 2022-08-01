import { NextFunction, Request, Response } from 'express';
import Ilogin from '../interfaces/login.interface';

const loginValidation = (req: Request, res: Response, next: NextFunction) => {
  const data : Ilogin = req.body;

  const { username, password } = data;

  if (!username) return res.status(400).json({ message: '"username" is required' });
  if (!password) return res.status(400).json({ message: '"password" is required' });

  next();
};

export default loginValidation;