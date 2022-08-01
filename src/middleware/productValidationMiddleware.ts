import { NextFunction, Request, Response } from 'express';
import Iproducts from '../interfaces/addProducts.interface';

const amountProductsValidation = (req: Request, res: Response, next: NextFunction) => {
  const data: Iproducts = req.body;
  const { name, amount } = data;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  if (!amount) return res.status(400).json({ message: '"amount" is required' });
  if (amount.length < 3) {
    return res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
  }
  if (name.length < 3) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }
  next();
};

export default amountProductsValidation;