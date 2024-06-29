
const PhotosController = require('../controllers/photosController');
const passport = require('passport');


module.exports = (app,upload) => {
    
    //Traer Datos
    app.get('/api/photos/getAll',PhotosController.getAll);
    
    //Guardar Datos
    // app.post('/api/photos/create',PhotosController.create);
    // app.post('/api/photos/create',passport.authenticate('jwt',{session:false}),upload.array('image',1),PhotosController.create);
    app.post('/api/photos/create',upload.array('image',1),PhotosController.create);    

    //Actualizar Datos
    // 401 unauthorized
    
    // app.put('/api/users/update',upload.array('image',1),usersController.update);
    // app.put('/api/users/updateWithoutImage', usersController.updateWithoutImage);

}