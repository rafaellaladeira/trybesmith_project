import { NextFunction, Request, Response } from 'express';
import { string } from 'joi';
import Iproducts from '../interfaces/addProducts.interface';

const amountProductsValidation = (req: Request, res: Response, next: NextFunction) => {
  const data: Iproducts = req.body;
  const { amount } = data;
  if (!amount) return res.status(400).json({ message: '"amount" is required' });
  if (amount.length < 3) {
    return res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
  }
  if (amount !== typeof string) {
    return res
      .status(422).json({ message: '"amount" must be a string' });
  }
  next();
};

export default amountProductsValidation;