import { NextFunction, Request, Response } from 'express';
import IaddUser from '../interfaces/addUsers.interface';

const levelMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const data: IaddUser = req.body;
  const { level } = data;

  if (!level) return res.status(400).json({ message: '"level" is required' });
  if (typeof level !== 'number') {
    return res.status(422).json({ message: '"level" must be a number' });
  }
  
  next();
};

export default levelMiddleware;