import { Router } from 'express';
import UsersControl from '../controllers/usersControl';
import classeMiddleware from '../middleware/classeUser.niddleware';
import levelMiddleware from '../middleware/leverUser.middleware';
import passwordMiddleware from '../middleware/passwordUser.middleware';
import userNameMiddleware from '../middleware/usernameUser.middleware';

const userRouter = Router();

userRouter.post(
  '/', 
  userNameMiddleware,
  classeMiddleware,
  levelMiddleware,
  passwordMiddleware,
  UsersControl.addUser,
);

export default userRouter;