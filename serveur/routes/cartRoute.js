const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddlewares');
const { getCartController, addProductToCartController, updateCartController, removeItemController } = require('../controllers/cartController');
const router = express.Router();

router.get('/getcart', authMiddleware, getCartController)

router.post('/addproduct', authMiddleware, addProductToCartController)

router.put('/update/:productId', authMiddleware, updateCartController)

router.delete('/remove/:productId', authMiddleware, removeItemController)

module.exports = router;