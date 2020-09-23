const UserController = require('../controllers/user.controller');
const { authenticate } = require("../config/config.JWT");

module.exports = (app) => {
    app.post("/api/login", UserController.login);
    app.post('/api/create/user', UserController.register);
    app.get('/api/user', authenticate,UserController.index);
    app.get('/api/user/:id', authenticate,UserController.show);
    app.put('/api/update/user/:id', authenticate,UserController.update);
    app.delete('/api/destroy/user/:id', authenticate,UserController.destroy);
    app.post("/api/logout", authenticate,UserController.logout);
    app.get("/api/user/loggedin", authenticate, UserController.getLoggedInUser);
}




// ************************************************************************** from Repo
// const userController = require("../controllers/user.controller");
// const { authenticate } = require("../config/jwt.config");

// module.exports = app => {
//     app.post("/api/register", userController.register);
//     app.post("/api/login", userController.login);
//     app.post("/api/logout", userController.logout);

//     // this route now has to be authenticated
//     app.get("/api/users", authenticate, userController.getAll);
//     app.get("/api/users/loggedin", authenticate, userController.getLoggedInUser);
// };