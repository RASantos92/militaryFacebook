const jwt = require('jsonwebtoken');
JWT_SECRET = "anything1";


module.exports.secret = JWT_SECRET;
module.exports.authenticate = (req, res, next) => {
    console.log(`UserToken: ${req.cookies.userToken}`);

    console.log(req.cookies)
    jwt.verify(req.cookies.userToken, secret, (err, payload) => {
        if (err) {
            console.log("This is err:", err);
            res.status(401).json({ verified: false });
        }
        else {
            console.log("SUCCESS")
            next();
        }
    });
}


// const jwt = require("jsonwebtoken");

// module.exports = {
//     authenticate(req, res, next) {
//         console.log(req.cookies.usertoken);
//         jwt.verify(
//             req.cookies.usertoken,
//             process.env.JWT_SECRET,
//             (err, payload) => {
//                 if (err) {
//                     res.status(401).json({ verified: false });
//                 } else {
//                     next();
//                 }
//             }
//         );
//     },
// };
