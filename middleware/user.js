const { User } = require('../db/index')

async function userMiddleware(req, res, next){
    const username = req.body.username;
    const password = req.body.password;

    const resp = await User.findOne({
        username : username,
        password : password
    })
    if(resp){
        next();
    }
    else{
        res.status(403).json({
            msg : 'user does not exist'
        })
    }
}

module.exports = userMiddleware;