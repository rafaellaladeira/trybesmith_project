import { NextFunction, Request, Response } from 'express';
import IaddUser from '../interfaces/addUsers.interface';

const classeMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const data: IaddUser = req.body;
  const { classe, level } = data;

  if (!classe) return res.status(400).json({ message: '"classe" is required' });
  if (typeof classe !== 'string') {
    return res.status(422).json({ message: '"classe" must be a string' });
  }
  if (classe.length < 3) {
    return res
      .status(422).json({ message: '"classe" length must be at least 3 characters long' });
  }
  if (level < 1) {
    return res
      .status(422).json({ message: '"level" must be greater than or equal to 1' });
  }
  next();
};

export default classeMiddleware;