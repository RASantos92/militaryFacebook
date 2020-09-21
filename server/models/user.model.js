const mongoose = require('mongoose');


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
    userName:{
        type: String,
        required: [true,"Must enter a username"],
        minlength: [5,"type need to be at least 5 characters"]
    },   
    userEmail:{
        type: String,
        required: [true,"Must enter a valid email"],
        // minlength: [3,"type need to ba at least 3 characters"]
    },
    userPassword:{
        type: String,
        required: [true,"Password"],
        minlength: [6,"Password longer than 5 characters"]
    },
    userConfirmPW:{
        type: String,
        required: [true,"Password needs to match"],
        // required:[if (userPassword != userConfirmPW)]
        minlength: [6,"Password longer than 5 characters"]
    },
    userLocation:{
        type: String,
        required: [true,"Where in the world do you live and/or stationed?"],
        // minlength: [3,"type need to ba at least 3 characters"]
    },
    userBranch:{
        type: String,
        required: [true,"Must declare what branch and/or civilian"],
        // minlength: [3,"type need to ba at least 3 characters"]
    },
    userRank: {
        type:String,
        required:[false],
        // minlength: [3,"description needs to be at least 3 characters"]
    },
    userRateMOS: {
        type:String,
        required:[false],
        // minlength: [3,"description needs to be at least 3 characters"]
    },
    userMessage: {
        type:String,
        required:[true, "Must include a message to post"],
        minlength: [8,"message needs to be at least 8 characters"]
    },
    // skillOne: {
    //     type:String,
    //     required:[false],
    // },
    // skillTwo: {
    //     type:String,
    //     required:[false],
    // }, 
    // skillThree: {
    //     type:String,
    //     required:[false],
    // },
    // like: {
    //     type:Number,
    //     required:[false]
    // }

}, { timestamps: true })
//this is how we register our schema.
const User = mongoose.model("User", UserSchema);

//Finally we export it out of the file.
module.exports = User;