const mongoose = require('mongoose');
const gameSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength: 4
    },
    imageUrl:{
        type:String,
        required:true,
        validate: {
            validator: (value) => {
              return /^https?:\/\//.test(value);
            },
            message: props => `${props.value} is not a valid image URL. It should start with "http://" or "https://".`
          }
    },
    price:{
        type:Number,
        required:true,
        min: 0,
    },
    description:{
        type:String,
        required:true,
        minlength: 10
    },
    genre:{
        type:String,
        required:true,
        minlength: 2
    },
    platform:{
        type:String,
        required:true,
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