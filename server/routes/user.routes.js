const UserController = require('../controllers/user.controller');


module.exports = (app) => {
    app.get('/api/user', UserController.index);
    app.post('/api/create/user', UserController.register);
    app.get('/api/user/:id', UserController.show);
    app.put('/api/update/user/:id', UserController.update);
    app.delete('/api/destroy/user/:id', UserController.destroy);

}





