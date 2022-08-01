import { NextFunction, Request, Response } from 'express';
import Iproducts from '../interfaces/addProducts.interface';

const nameProductsValidation = (req: Request, res: Response, next: NextFunction) => {
  const data: Iproducts = req.body;
  const { name, amount } = data;

  if (typeof amount !== 'string') {
    return res.status(422).json({ message: '"amount" must be a string' });
  } 
  if (typeof name !== 'string') return res.status(422).json({ message: '"name" must be a string' });
  next();
};
  
export default nameProductsValidation;