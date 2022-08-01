import { NextFunction, Request, Response } from 'express';
import { string } from 'joi';
import Iproducts from '../interfaces/addProducts.interface';

const nameProductsValidation = (req: Request, res: Response, next: NextFunction) => {
  const data: Iproducts = req.body;
  const { name } = data;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  if (name.length < 3) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }
  if (name !== typeof string) {
    return res
      .status(422).json({ message: '"name" must be a string' });
  }
  next();
};
  
export default nameProductsValidation;