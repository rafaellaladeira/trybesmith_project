import { Router } from 'express';
import control from '../controllers/loginControl';
import loginValidation from '../middleware/loginValidationMiddleware';

const loginRouter = Router();

loginRouter.get('/', loginValidation, control.checkLogin);

export default loginRouter;