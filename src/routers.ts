import { Router } from 'express';
import control from './controllers/addProductsControl';

const router = Router();

router.post('/', control.addProducts);

export default router;