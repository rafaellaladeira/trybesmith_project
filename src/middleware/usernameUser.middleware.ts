import { NextFunction, Request, Response } from 'express';
import IaddUser from '../interfaces/addUsers.interface';

const userNameMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const data: IaddUser = req.body;
  const { username } = data;

  if (!username) return res.status(400).json({ message: '"username" is required' });
  if (typeof username !== 'string') {
    return res.status(422).json({ message: '"username" must be a string' });
  }
  if (username.length < 3) {
    return res
      .status(422).json({ message: '"username" length must be at least 3 characters long' });
  }
  next();
};

export default userNameMiddleware;