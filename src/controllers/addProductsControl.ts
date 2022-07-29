import { Request, Response } from 'express';
import service from '../services/addProductsServices';

const addProducts = async (req: Request, res: Response): Promise<Response> => {
  const result = await service.addProducts(req.body);  
  return res.status(201).json(result);
};

export default { addProducts };