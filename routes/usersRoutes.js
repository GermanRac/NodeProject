const usersController = require('../controllers/usersController');


module.exports = (app,upload) => {
    
    //Traer Datos
    app.get('/api/users/getAll',usersController.getAll);
    
    //Guardar Datos
    app.post('/api/users/create',usersController.register);
    app.post('/api/users/login',usersController.login);

    //Actualizar Datos
    
    app.put('/api/users/update',upload.array('image',1),usersController.update);

}