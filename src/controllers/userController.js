const router = require('express').Router();
const userManager = require('../managers/userManager');
const { extractErrorMessages } = require('../utils/errorHelper');

router.get('/users/register', (req,res) =>{
    res.render('users/register');
});

router.post('/users/register', async (req,res) => {
    try {
        
        const {name, email, password, repeatPassword} = req.body;
      
        
            await userManager.create({name,email,password,repeatPassword});
            res.redirect('/')
        
    } catch (error) {
        const errorMessages = extractErrorMessages(error);
        res.render('users/register', {errorMessages});
    }

})

router.get('/users/login', (req,res) => {
    res.render('users/login');
});

router.post('/users/login', async (req,res) => {
    try {
        const {email, password} = req.body;
        
        const token = await userManager.login(email, password);
        res.cookie('token', token, {httpOnly:true});
        res.redirect('/');
        
    } catch (error) {
        const errorMessages = extractErrorMessages(error);
        res.render('users/login', {errorMessages})
    }
});

router.get('/users/logout', (req,res) => {
    res.clearCookie('token');
    res.redirect('/');
})


module.exports = router;