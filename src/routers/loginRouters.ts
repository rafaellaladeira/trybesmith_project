import { Router } from 'express';
import control from '../controllers/loginControl';
import loginValidation from '../middleware/loginValidationMiddleware';

const loginRouter = Router();

loginRouter.post('/', loginValidation, control.checkLogin);

export default loginRouter;