const router = require('express').Router();
const userManager = require('../managers/userManager');

router.get('/users/register', (req,res) =>{
    res.render('users/register');
});

router.post('/users/register', async (req,res) => {
    const {name, email, password, repeatPassword} = req.body;
  
    
        await userManager.create({name,email,password,repeatPassword});
        res.redirect('/')
    

})

router.get('/users/login', (req,res) => {
    res.render('users/login');
});


module.exports = router;