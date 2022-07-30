import { Router } from 'express';
import ProductsControl from '../controllers/productsControl';

const router = Router();

router.post('/', ProductsControl.addProducts);
router.get('/', ProductsControl.getAll);

export default router;