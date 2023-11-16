const mongoose = require('mongoose');
const bcrypt = require('bcrypt');



const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:5,

    },
    email:{
        type:String,
        required:true,
        minLength:10,
    },
    password:{
        type:String,
        required:true,
        validate:{
            validator: function(value){
                return /^[A-Za-z0-9]+$/.test(value)
            },
            message: 'Invalid Password'
        },
        minLength: [4,'Password is too short!']
    }
});

userSchema.virtual('repeatPassword')
.set(function(value){
    if(value !== this.password){
        throw new Error("Passwords missmatch!")
    }
})

userSchema.pre('save', async function(){
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
})

const User = mongoose.model('User', userSchema);

module.exports = User;