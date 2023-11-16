const User = require('../models/User');
const bcrypt = require('bcrypt');
const SECRET = require('../config/SECRET');
const jwt = require('../library/jwt');

exports.create = (userData) => User.create(userData);


exports.login = async (email,password) => {
    const user = await User.findOne({email});
    

    if(!user){
        throw new Error('Username or password is incorrect!');
    };

    const isValid = await bcrypt.compare(password,user.password);
    if(!isValid){
        throw new Error('Username or password is incorrect!');
    }

    const payload = {
        _id:user._id,
        name:user.name
    };

    const token = await jwt.sign(payload, SECRET, {expiresIn:'1d'});

    return token;

}