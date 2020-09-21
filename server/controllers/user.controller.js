const User = require('../models/user.model');

module.exports = {
    index : (req,res) => {
        User.find()
            .then(user =>{
                res.json({results:user})
            })
            .catch(err => {
                console.log(err);
            })
    },
    create : (req,res) => {
        User.create(req.body)
            .then(user => {
                res.json({results:user})
            })
            .catch(err => res.json(err.errors))
    },
    show : (req,res) => {
        user.findOne({_id:req.params.id})
            .then(user => {
                res.json({results:user})
            })
            .catch(err => res.json(err.errors))
    },
    update : (req,res) => {
        user.findOne({_id: req.params.id}, function(err,user){
            user.userFirstName = req.body.userFirstName;
            user.userLastName = req.body.userLastName;
            user.userEmail = req.body.userEmail;
            user.userPassword = req.body.userPassword;
            user.userLocation = req.body.userLocation;
            user.userBranch = req.body.userBranch;
            user.userRank = req.body.userRank;
            user.userRateMOS = req.body.userRateMOS;
            user.userMessage = req.body.userMessage;
            user.save(function(err,saveduser) {
                if(saveduser == null)
                    res.status(400).json(err);
                else 
                    res.json({user:savedUser});
            })
        })
    },
    destroy : (req,res) => {
        user.deleteOne({_id:req.params.id})
            .then(result => res.json({results: result}))
            .catch(err => res.json(err.errors))
    }
}