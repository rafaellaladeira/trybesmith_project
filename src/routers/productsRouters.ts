import { Router } from 'express';
import ProductsControl from '../controllers/productsControl';
import nameProductsValidation from '../middleware/nameProductsMiddleware';
import amountProductsValidation from '../middleware/productValidationMiddleware';

const router = Router();

router.get('/', ProductsControl.getAll);
router.post('/', nameProductsValidation, amountProductsValidation, ProductsControl.addProducts);

export default router;