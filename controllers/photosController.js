const photo = require('../models/photo');
const storage = require('../utils/cloud_storage');



module.exports = {

    async create(req,res,next){

        try{
            const photo = JSON.parse (req.body.photo);  //para capturar lo que el cliente envie por medio de parametros 
            console.log('photo',photo);


            const files = req.files;

            if (files.length > 0){ //Cliente envia un archivo
                const pathImage = `image_${Date.now()}`; // nombre del archivo
                const url = await storage(files[0],pathImage);

                if (url != undefined && url != null){
                    photo.image = url;

                }
            } 


            const data = await  photo.create(photo);



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
                message: 'El registro de photo se realizo correctamente',
                data: {
                    'id':data.id
                }
            });
            
        }
        catch(error){
            console.log('Error',error);
            return res.status(501).json({
                success:false,
                message: 'Hubo un error al crear la  photo',
                error: error
            });
        }
    },


    async getAll(req,res,next){
        
        try {
            const data = await photo.getAll();

            return res.status(201).json(data);
            
        } catch (error) {

            console.log('Error',error);
            return res.status(501).json({
                success:false,
                message: 'Hubo un error al crear el photo',
                error: error
            
            });
        }    
    }




}