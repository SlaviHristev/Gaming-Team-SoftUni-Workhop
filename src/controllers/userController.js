const router = require('express').Router();

router.get('/users/register', (req,res) =>{
    res.render('users/register');
});

router.get('/users/login', (req,res) => {
    res.render('users/login');
});


module.exports = router;