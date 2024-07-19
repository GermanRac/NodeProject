const categoriesController = require('../controllers/categoriesController');
const usersController = require('../controllers/categoriesController');
const passport = require('passport');


module.exports = (app,upload) => {
    
    //Traer Datos
    app.get('/api/categories/getAll',categoriesController.getAll);
    
    //Guardar Datos
    app.post('/api/categories/create',categoriesController.create);
    

    //Actualizar Datos
    // 401 unauthorized
    
    // app.put('/api/users/update',upload.array('image',1),usersController.update);
    // app.put('/api/users/update',passport.authenticate('jwt',{session:false}),upload.array('image',1),usersController.update);
    // app.put('/api/users/updateWithoutImage', usersController.updateWithoutImage);
    // app.put('/api/users/updateWithoutImage', passport.authenticate('jwt',{session:false}),usersController.updateWithoutImage);
    
}