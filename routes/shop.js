const express = require('express');

const router = express.Router();

router.use('/shop', (req,res,next) => {
    console.log('In the middleware');
    res.send("Hello, Express");
});

module.exports = router;