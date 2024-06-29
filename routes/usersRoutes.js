const usersController = require('../controllers/usersController');
const passport = require('passport');


module.exports = (app,upload) => {
    
    //Traer Datos
    app.get('/api/users/getAll',usersController.getAll);
    
    //Guardar Datos
    app.post('/api/users/create',usersController.register);
    app.post('/api/users/login',usersController.login);

    //Actualizar Datos
    // 401 unauthorized
    
    // app.put('/api/users/update',upload.array('image',1),usersController.update);
    app.put('/api/users/update',passport.authenticate('jwt',{session:false}),upload.array('image',1),usersController.update);
    // app.put('/api/users/updateWithoutImage', usersController.updateWithoutImage);
    app.put('/api/users/updateWithoutImage', passport.authenticate('jwt',{session:false}),usersController.updateWithoutImage);
    
}