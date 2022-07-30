import { Request, Response } from 'express';
import JWTgenerate from '../helpers/JWTgenerate';
// import IaddUser from '../interfaces/addUsers.interface';
import service from '../services/usersServices';

const addUser = async (req: Request, res: Response) => {
  const data = req.body;
  const result = await service.addUser(data);
  if (result) {
    const token = JWTgenerate(data);
    return res.status(201).json({ token });
  }
};

export default { addUser };