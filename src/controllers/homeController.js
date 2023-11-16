const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('home');
});

router.get('/catalog', (req,res) => {
    res.render('catalog')
});

router.get('/search', (req,res) => {
    res.render('search')
})

module.exports = router;