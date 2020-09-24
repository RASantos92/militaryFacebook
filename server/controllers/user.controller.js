const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    index: (req, res) => {
        User.find()
            .then(user => {
                res.json({ results: user })
            })
            .catch(err => {
                console.log(err);
            })
    },
    // create: (req, res) => {
    //     User.create(req.body)
    //         .then(user => {
    //             res.json({ results: user })
    //         })
    //         .catch(err => res.json(err.errors))
    // },
    show: (req, res) => {
        User.findOne({ _id: req.params.id })
            .then(user => {
                res.json({ results: user })
            })
            .catch(err => res.json(err.errors))
    },
    update: (req, res) => {
        User.findOne({ _id: req.params.id }, function (err, user) {
            user.userFirstName = req.body.userFirstName;
            user.userLastName = req.body.userLastName;
            user.userEmail = req.body.userEmail;
            user.userPassword = req.body.userPassword;
            user.userLocation = req.body.userLocation;
            user.userBranch = req.body.userBranch;
            user.userRank = req.body.userRank;
            user.userRateMOS = req.body.userRateMOS;
            user.userLOS = req.body.userMessage;
            user.save(function (err, saveduser) {
                if (saveduser == null)
                    res.status(400).json(err);
                else
                    res.json({ user: savedUser });
            })
        })
    },
    destroy: (req, res) => {
        User.deleteOne({ _id: req.params.id })
            .then(result => res.json({ results: result }))
            .catch(err => res.json(err.errors))
    },
    register: (req, res) => {
        User.create(req.body)
            .then(user => {
                res.json({ msg: "success!", user: user });
            })
            .catch(err => res.json(err.errors));
    },
    test(req,res) {
        res.json("success")
    },
    login(req, res) {
        console.log("We are now loggin in.")
        console.log(req.body)
        User.findOne({ userName: req.body.userName })
            .then((user) => {
                console.log(user)
                if (user === null) {
                    res.status(400).json({ msg: "invalid login attempt" });
                } else {
                    console.log("We are about to bcrypt")

                    bcrypt
                        .compare(req.body.userPassword, user.userPassword)
                        .then((passwordIsValid) => {
                            if (passwordIsValid) {
                                console.log("THis is about to happen",process.env.JWT_SECRET);
                                res
                                    .cookie(
                                        "usertoken",
                                        jwt.sign({ _id: user._id }, process.env.JWT_SECRET),
                                        {
                                            httpOnly: true,
                                        }
                                    )
                                    .json({ user: user });
                            } else {
                                console.log("Uhhhhhhhhhhh")
                                res.status(400).json({ msg: "invalid login attempt" });
                            }
                        })
                        .catch((err) =>
                            res.status(400).json({ msg: "invalid login attempt" })
                        );
                }
            })
            .catch((err) => res.json(err));
    },
    logout(req, res) {
        res
            .cookie("usertoken", jwt.sign({ _id: "" }, process.env.JWT_SECRET), {
                httpOnly: true,
                maxAge: 0,
            })
            .json({ msg: "ok" });
    },
    logout2(req, res) {
        res.clearCookie("usertoken");
        res.json({ msg: "usertoken cookie cleared" });
    },

    getLoggedInUser(req, res) {
        const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true });

        User.findById(decodedJWT.payload._id)
            .then((user) => res.json(user))
            .catch((err) => res.json(err));
    },

    // getAll(req, res) {
    //     User.find()
    //         .then((users) => res.json(users))
    //         .catch((err) => res.json(err));
    // },

    // getOne(req, res) {
    //     User.findOne({ _id: req.params.id })
    //         .then((user) => res.json(user))
    //         .catch((err) => res.json(err));
    // },
};

