import { Request, Response } from 'express';
import service from '../services/addProductsServices';

const addProducts = async (req: Request, res: Response): Promise<Response> => {
  const result = await service.addProducts(req.body);  
  return res.status(201).json(result);
};

const getAll = async (_req: Request, res: Response) => {
  const result = await service.getAll();
  return res.status(200).json(result);
};

export default { addProducts, getAll };