const db = require('../config/config');
const bcrypt = require('bcryptjs')
const User = {};

User.getAll = () => {
    const sql = `
    SELECT 
        * 
    FROM 
        users
    `;
    return db.manyOrNone(sql);
}


User.findByEmail = (email) => {
    const sql = `
    SELECT
        email,
        name,
        lastname, 
        points,
        consent,  
        password, 
        session_token,
        image
    FROM
        users
    WHERE
        email = $1    
    `;

    return db.oneOrNone(sql,email); 

} 


User.findById = (id,callback)=>{
    const sql = `
    SELECT
        email,
        name,
        lastname, 
        points,
        consent,  
        password, 
        session_token,
        image
    FROM
        users
    WHERE
        id = $1    
    `;

    return db.oneOrNone(sql,id).then(user =>{callback(null,user)}) 

}




User.create = async (user) => {
    
    const hash = await bcrypt.hash(user.password,14);
    
    const sql = `
    INSERT INTO
        users(
            email,
            name,
	        lastname, 
            points,
            consent,  
            password, 
            session_token,
            created_at, 
            updated_at,
            image 

        )
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id
    `;

    return db.oneOrNone(sql,[
        user.email,
        user.name,
        user.lastname,
        user.points,
        user.consent,
        hash,
        user.session_token,
        new Date(),
        new Date(),
        user.image
    
    
    ]);
}


User.update = (user) =>{
    const sql =`
    UPDATE
        users
    SET
        name = $2,
        lastname = $3,
        image = $4,
        updated_at = $5
        
    WHERE
        id = $1
    `;

    return db.none(sql, [
        user.id,
        user.name,
        user.lastname,
        user.image,
        new Date()
        

    ]);



}


User.updateSessionToken = (id_user,session_token) =>{
    const sql =`
    UPDATE
        users
    SET
        session_token = $2        
    WHERE
        id = $1
    `;

    return db.none(sql, [
        id_user,
        session_token

    ]);



}



module.exports = User;
