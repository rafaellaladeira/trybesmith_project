import { Router } from 'express';
import UsersControl from '../controllers/usersControl';

const userRouter = Router();

userRouter.post('/', UsersControl.addUser);

export default userRouter;