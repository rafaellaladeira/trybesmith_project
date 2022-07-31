import { Request, Response } from 'express';
import service from '../services/ordersService';

const getAll = async (_req: Request, res: Response) => {
  const result = await service.getAll();
  return res.status(200).json(result);
};

export default { getAll };