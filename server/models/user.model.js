const mongoose = require('mongoose');


const MessageSchema = new mongoose.Schema({
    userMessage: {
        type: String,
        // required: [true, "Must enter user First Name this time"],
        minlength: [1, "message must be longer than 1 character"],
        maxlength: [255, "message must be shorter than 255 characters"]
    },
}, { timestamps: true })


const UserSchema = new mongoose.Schema({
    userFirstName: {
        type: String,
        required: [true, "Must enter user First Name this time"],
        minlength: [2, "name has to be more than 2 characters"]
    },
    userLastName: {
        type: String,
        required: [true, "Must enter user Last Name"],
        minlength: [2, "name has to be more than 2 characters"]
    },
    userName: {
        type: String,
        required: [true, "Must enter a username"],
        minlength: [5, "type need to be at least 5 characters"]
    },
    userEmail: {
        type: String,
        required: [true, "Must enter a valid email"],
        // minlength: [3,"type need to ba at least 3 characters"]
    },
    userPassword: {
        type: String,
        required: [true, "Password"],
        minlength: [6, "Password longer than 5 characters"]
    },
    userConfirmPW: {
        type: String,
        required: [true, "Password needs to match"],
        // required:[if (userPassword != userConfirmPW)]
        minlength: [6, "Password longer than 5 characters"]
    },
    userLocation: {
        type: String,
        required: [true, "Where in the world do you live and/or stationed?"],
        // minlength: [3,"type need to ba at least 3 characters"]
    },
    userBranch: {
        type: String,
        required: [true, "Must declare what branch and/or civilian"],
        // minlength: [3,"type need to ba at least 3 characters"]
    },
    userRank: {
        type: String,
        required: [false],
        // minlength: [3,"description needs to be at least 3 characters"]
    },
    userRateMOS: {
        type: String,
        required: [false],
        // minlength: [3,"description needs to be at least 3 characters"]
    },
    userLOS: {
        type: String,
        required: [false],
        // minlength: [3,"description needs to be at least 3 characters"]
    },
    userMessages: [MessageSchema]


}, { timestamps: true })



//this is how we register our schema.
const User = mongoose.model("User", UserSchema);
// const Message = mongoose.model("Message", MessageSchema);


//Finally we export it out of the file.
module.exports = User;
// module.exports = Message;