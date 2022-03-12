import { Router } from 'express';
import { getAllProducts, createNewproduct} from '../service/productService'

const router = Router()

router.get('/products', getAllProducts)
router.post('/products', createNewproduct)

export default router