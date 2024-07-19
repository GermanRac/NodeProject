const RewardsController = require('../controllers/rewardsController');
// const passport = require('passport');


module.exports = (app,upload) => {
    
    //Traer Datos
    app.get('/api/rewards/getAll',RewardsController.getAll);
    app.get('/api/rewards/findByCategory/:id_category',RewardsController.findByCategory);
    
    //Guardar Datos
    app.post('/api/rewards/create',RewardsController.create);
    

    //Actualizar Datos
    // 401 unauthorized
    
    // app.put('/api/users/update',upload.array('image',1),usersController.update);
    // app.put('/api/users/updateWithoutImage', usersController.updateWithoutImage);

}