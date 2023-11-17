const mongoose = require('mongoose');
const gameSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Game name is required!'],
        minlength: [4, 'Length must be at least 4 symbols long!']
    },
    imageUrl:{
        type:String,
        required:[true, 'Image URL is required!'],
        validate: {
            validator: (value) => {
              return /^https?:\/\//.test(value);
            },
            message: props => `${props.value} is not a valid image URL. It should start with "http://" or "https://".`
          }
    },
    price:{
        type:Number,
        required:[true, 'Price is required!'],
        min: 0,
    },
    description:{
        type:String,
        required:[true, 'Description is required!'],
        minlength: [10, 'Description must be at least 10 symbols long!']
    },
    genre:{
        type:String,
        required:[true, 'Genre is required!'],
        minlength: [2, 'Genre must be at least 2 symbols long!']
    },
    platform:{
        type:String,
        required:[true, 'Platform is required!'],
        enum: ["PC", "Nintendo", "PS4", "PS5", "XBOX"]
    },
    ownerId:{
        type:String,
        required:true
    },
    boughtBy: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
      }],

});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;