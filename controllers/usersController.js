const User = require('../models/user');
const Rol = require('../models/rol');
const bcrypt = require('bcryptjs'); 
const passport = require('passport');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys')

module.exports = {
    async getAll(req,res,next){
        try{
            const data = await User.getAll();
            console.log(`Usuarios: ${data}`);
            return res.status(201).json(data);
        }
        catch (error){
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message:'Error al obtener los usuarios'
            });

        }
    },

    async register(req,res,next){

        try{
            const user = req.body;  //para capturar lo que el cliente envie por medio de parametros 
            const data = await User.create(user);

            //insertar rol de cliente por defecto 
            await Rol.create(data.id, 1);

            const token = jwt.sign({id:data.id,email:user.email},keys.secretOrKey,{

                // expiresIn:
 
            })

            const myData = {
                id: data.id,
                name: user.name,
                lastname: user.lastname,
                email : user.email,
                points : user.points,
                session_token: `JWT ${token}`

            }; 

            return res.status(201).json({
                success:true,
                message: 'El registro se realizo correctamente',
                data: myData
            });
            
        }
        catch(error){
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success:false,
                message: 'Hubo un error en el registro del usuario',
                error: error
            });
        }
    },

    async login(req,res,next){

        try {
           const email = req.body.email;
           const password = req.body.password;     
           
           const myUser = await User.findByEmail(email);

           if (!myUser){
                return res.status(401).json({
                    success:false,
                    message:'el email no fue encontrado'
                })   
           } 
           const isPasswordValid = await bcrypt.compare(password, myUser.password);
           if (isPasswordValid) {

            const token = jwt.sign({id:myUser.id,email:myUser.email},keys.secretOrKey,{

                // expiresIn:
 
            })

            const data = {
                id: myUser.id,
                name: myUser.name,
                lastname: myUser.lastname,
                email : myUser.email,
                points : myUser.points,
                session_token: `JWT ${token}`

            };  

            return res.status(201).json({
                success: true,
                message:'El usuario ha sido autenticado',
                data:data
            });

        }
        else{
            return res.status(401).json({
                success: false,
                message:'La contrasena es incorrecta',
                data:data
            });

        }
    }
        catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success:false,
                message: 'Hubo un error en el login  del usuario',
                error: error
            });
        }

    }
        
};
