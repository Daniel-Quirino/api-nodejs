const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    })
})

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(200).json({
        message: 'Handling POST requests to /products',
        createdProduct: product
    })
})

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if( id === 'special') {
        res.status(200).json({
            message: 'You discvered the special ID',
            id: id
        })
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
})

router.patch('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling PATCH requests to /products'
    })
})

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling DELETE requests to /products'
    })
})

module.exports = router;