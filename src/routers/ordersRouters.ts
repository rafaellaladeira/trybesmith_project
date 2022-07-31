import { Router } from 'express';
import control from '../controllers/ordersControl';

const orderRouter = Router();

orderRouter.get('/', control.getAll);

export default orderRouter;