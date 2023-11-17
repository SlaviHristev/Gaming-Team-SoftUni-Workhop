const mongoose = require('mongoose');
const bcrypt = require('bcrypt');



const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Username is required!'],
        minLength:[5, 'Username should be at least 5 symbols long!'],

    },
    email:{
        type:String,
        required:[true, 'Email is requied!'],
        minLength:[10, 'Email should be at least 10 symbols long!'],
    },
    password:{
        type:String,
        required:[true, 'Password is required!'],
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