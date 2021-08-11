const express = require('express');

const router = express.Router();

router.get('/form', (req,res,next) => {
    console.log('In the form');
    res.send('<form action = "/submitted" method = "POST"><input type="text" name="title" placeholder="title"><button type="submit">SUBMIT</button></form>');
});

router.post('/submitted', (req,res,next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;