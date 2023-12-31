const router = require('express').Router();
const homeController = require('../src/controllers/homeController');
const userController = require('../src/controllers/userController');
const gamesController = require('../src/controllers/gamesController');

router.use(homeController);
router.use(userController);
router.use(gamesController);

router.get('*', (req,res) =>{
   
    res.render('404')
    
})


module.exports = router;
