const { Router } = require('express');
const userMiddleware = require('../middleware/user');
const router = Router();

router.post('/signup', function(req, res){

})

router.post('/courses', function(req, res){
    
})

router.post('/courses/:courseID', userMiddleware, function(req,res){

})

router.post('/purchasedCourses', userMiddleware, function(req,res){
    
})

module.exports = router;