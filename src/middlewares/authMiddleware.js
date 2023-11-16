const SECRET = require('../config/SECRET');
const jwt = require('../library/jwt');

exports.auth = async (req,res,next)=>{
    const token = req.cookies['token'];

    if(token){
        try {
            const user = await jwt.verify(token,SECRET);
            req.user = user;
            res.locals.isAuthenticated = true;
            res.locals.user = user;
            next();
        } catch (err) {
            res.clearCookie('token');
            res.redirect('/login')
        }
    }else{
        next();
    }
}

exports.isAuth = (req,res,next) =>{
    if(!req.user){
        return res.redirect('/');
    }
    
    next();
    
}