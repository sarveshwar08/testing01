const mongoose  = require("mongoose");
mongoose.connect('mongodb+srv://sarveshwar08:wNzguFCBHXQDnbrs@cluster0.arinkh1.mongodb.net/')

const UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    purchasedCourses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Course'
    }]
})

const AdminSchema = new mongoose.Schema({
    username : String,
    password : String,
})

const CourseSchema = new mongoose.Schema({
    title : String,
    description : String,
    price : Number,
    ImageLink : String
})

const User = mongoose.model('User', UserSchema);
const Admin = mongoose.model('Admin', AdminSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    User,
    Admin,
    Course
}
