const usersController = require('../controllers/usersController');


module.exports = (app) => {
    //Traer Datos
    app.get('/api/users/getAll',usersController.getAll);
    
    //Guardar Datos
    app.post('/api/users/create',usersController.register);
    app.post('/api/users/login',usersController.login);

}