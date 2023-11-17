const Game = require('../models/Game');

exports.create = (gameData) => Game.create(gameData);

exports.getAll = () => Game.find();

exports.findOne = (gameId) => Game.findById(gameId);

exports.delete = (gameId) =>  Game.findByIdAndDelete(gameId);

exports.edit = (gameId, gameData) => Game.findByIdAndUpdate(gameId,gameData);

exports.buy = (gameId, userId) => Game.findByIdAndUpdate(gameId, {$push: {boughtBy: userId}});

exports.search = async (search, platform) => {
    let result = await Game.find().lean();
    // console.log(result);
    // console.log(search);
    if (search) {
        const searchTerm = search.toString().toLowerCase();
        result = result.filter(game => game.name.toLowerCase().includes(searchTerm));
    }
    console.log(result);
    if(platform){
        result = result.filter(game => game.platform.includes(platform));

    }

    return result;
    // console.log(result);
}
