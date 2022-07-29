import { Router } from 'express';
import control from './controllers/addProductsControl';

const router = Router();

router.post('/', control.addProducts);
router.get('/', control.getAll);

export default router;