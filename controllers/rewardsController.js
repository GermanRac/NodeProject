const Reward = require('../models/reward');
const storage = require('../utils/cloud_storage');



module.exports = {

    async create(req,res,next){ 

        console.log('REQ BODY',req.body);

        try{
            const reward = JSON.parse (req.body.reward);  //para capturar lo que el cliente envie por medio de parametros 
            console.log('Reward',reward);


            const files = req.files;

            if (files.length > 0){ //Cliente envia un archivo
                const pathImage = `image_${Date.now()}`; // nombre del archivo
                const url = await storage(files[0],pathImage);

                if (url != undefined && url != null){
                    reward.image = url;

                }
            } 


            const data = await  Reward.create(reward);



            const myData = {
                id: data.id,
                name: user.name,
                lastname: user.lastname,
                email : user.email,
                points : user.points,
                session_token: `JWT ${token}`,
                image : user.image

            }; 

            return res.status(201).json({
                success:true,
                message: 'El registro de reward se realizo correctamente',
                data: {
                    'id':data.id
                }
            });
            
        }
        catch(error){
            console.log('Error',error);
            return res.status(501).json({
                success:false,
                message: 'Hubo un error al crear la  reward',
                error: error
            });
        }
    },


    async getAll(req,res,next){
        
        try {
            const data = await Reward.getAll();

            return res.status(201).json(data);
            
        } catch (error) {

            console.log('Error',error);
            return res.status(501).json({
                success:false,
                message: 'Hubo un error al crear el reward',
                error: error
            
            });
        }    
    }




}