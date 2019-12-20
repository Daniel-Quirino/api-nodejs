const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(201).json({
        message: 'Orders were fetched'
    })
})

router.post('/:orderId', (req, res, next) => {
    res.status(201).json({
        message: 'Orders were created',
        orderId: req.params.orderId
    })
})


module.exports = router;