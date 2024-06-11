const EventsController = require('../controllers/eventsController');
// const passport = require('passport');


module.exports = (app,upload) => {
    
    //Traer Datos
    // app.get('/api/users/getAll',usersController.getAll);
    
    //Guardar Datos
    app.post('/api/events/create',EventsController.create);
    

    //Actualizar Datos
    // 401 unauthorized
    
    // app.put('/api/users/update',upload.array('image',1),usersController.update);
    // app.put('/api/users/updateWithoutImage', usersController.updateWithoutImage);

}