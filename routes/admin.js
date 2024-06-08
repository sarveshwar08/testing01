const { Router } = require("express");
const adminMiddleware = require('../middleware/admin');
const { Admin, Course } = require("../db");

const router = Router();

const check_user_exist = async (username, password) => {
    const resp = await Admin.findOne({
        username : username,
        password : password
    })
    if(resp){
        return true;
    }
    return false;
}
router.post('/signup', async function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(check_user_exist(username, password)){
        res.status(409).json({
            msg : "user already exists"
        })
    }

    await Admin.create({
        username : username,
        password : password
    })
    res.json({
        msg : "admin created successfully"
    })
})

router.post('/courses', adminMiddleware, async function(req,res){

    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const new_course = await Course.create({
        title, description, price, imageLink
    })
    console.log(new_course);
    res.json({
        msg : "course created successfully",
        courseId : new_course._id
    })
})

router.get('/courses', adminMiddleware, function(req,res){

})

module.exports = router;