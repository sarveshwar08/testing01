const { Admin } = require('../db/index');

async function adminMiddleware(req, res, next){
    const username = req.body.username;
    const password = req.body.password;

    const resp = await Admin.findOne({
        username : username,
        password : password
    })
    if(resp){
        next();
    }
    else{
        res.status(403).json({
            msg : 'Admin does not exist'
        })
    }
}

module.exports = adminMiddleware;