import { NextFunction, Request, Response } from 'express';
import IaddUser from '../interfaces/addUsers.interface';

const passwordMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const data: IaddUser = req.body;
  const { password } = data;

  if (!password) return res.status(400).json({ message: '"password" is required' });
  if (password.length < 8) {
    return res
      .status(422).json({ message: '"password" length must be at least 8 characters long' });
  }
  if (typeof password !== 'string') {
    return res.status(422).json({ message: '"password" must be a string' });
  }
  next();
};

export default passwordMiddleware;