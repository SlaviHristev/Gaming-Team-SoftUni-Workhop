const router = require('express').Router();
const gameManager = require('../managers/gameManager');
const getPlatformOptions = require('../utils/getPlatform')

router.get('/games/create', (req,res) => {
    res.render('games/create')
});

router.post('/games/create', async (req,res) => {
    const {name,imageUrl,description, genre,price, platform} = req.body;
    await gameManager.create({name,imageUrl,description, genre,price, platform, ownerId: req.user._id})
    res.redirect('/catalog');

});

router.get('/games/:gameId/details', async (req,res) => {
    const game = await gameManager.findOne(req.params.gameId).lean();
    const isOwner = game.ownerId === req.user?._id;
    res.render('games/details', {game, isOwner});
})

router.get('/games/:gameId/delete', async (req,res) => {
    await gameManager.delete(req.params.gameId);
    res.redirect('/catalog');
});

router.get('/games/:gameId/edit', async (req,res) => {
    const game = await gameManager.findOne(req.params.gameId).lean();
    const platforms = getPlatformOptions(game.platform);
    res.render('games/edit', {game, platforms})
});

router.post('/games/:gameId/edit', async (req,res) =>{
    const gameId = req.params.gameId;
    const {name,imageUrl,description, genre,price, platform} = req.body;
    await gameManager.edit(gameId,{name,imageUrl,description, genre,price, platform});
    res.redirect(`/games/${gameId}/details`);
})
module.exports = router;