const router = require('express').Router();
const gameManager = require('../managers/gameManager');



router.get('/', (req,res) => {
    res.render('home');
});

router.get('/catalog', async (req,res) => {
    const games = await gameManager.getAll().lean();
    res.render('catalog', {games});
});




module.exports = router;