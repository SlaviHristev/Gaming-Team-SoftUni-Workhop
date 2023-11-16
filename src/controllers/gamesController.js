const router = require('express').Router();

router.get('/games/create', (req,res) => {
    res.render('games/create')
})

module.exports = router;