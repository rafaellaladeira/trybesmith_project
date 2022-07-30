import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import IaddUser from '../interfaces/addUsers.interface';

dotenv.config();

const jwtConfig = {
  expiresIn: '30d',
  algorithm: 'HS256',
} as SignOptions;

const JWTgenerate = (payload: IaddUser) => jwt.sign(payload, 'batatinha', jwtConfig);

export default JWTgenerate;