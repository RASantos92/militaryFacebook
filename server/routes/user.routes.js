const UserController = require('../controllers/user.controller');
const { authenticate } = require("../config/config.JWT");

module.exports = (app) => {
    app.get('/api/user', UserController.index);
    app.post('/api/create/user', UserController.register);
    app.get('/api/user/:id', UserController.show);
    app.put('/api/update/user/:id', UserController.update);
    app.delete('/api/destroy/user/:id', UserController.destroy);
    app.post('/api/create/user', UserController.register);
    app.post("/api/login", UserController.login);
    app.post("/api/logout", UserController.logout);
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