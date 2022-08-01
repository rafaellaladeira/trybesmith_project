import { Request, Response } from 'express';
import JWTgenerate from '../helpers/JWTgenerate';
import Ilogin from '../interfaces/login.interface';
import service from '../services/loginService';

const checkLogin = async (req: Request, res: Response) => {
  const data: Ilogin = req.body;
  const { username } = req.body;
  
  const result = await service.checkLogin(data);
  const send = result.find((e): number => e.id);
  
  if (send === undefined) {
    return res.status(401).json({ message: 'Username or password invalid' });
  } 
  const token = JWTgenerate({ id: send.id, username });
  return res.status(200).json({ token });
};

export default { checkLogin };