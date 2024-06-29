const db = require('../config/config');

const Photo = {};


Photo.getAll = () => {
    const sql = `
    SELECT 
        id,
        name,
        image
    FROM 
        photos
    Order BY 
        name    
    `;
    return db.manyOrNone(sql);
}


Photo.create = (Photo) =>{

    const sql =`
    INSERT INTO
        photos(
            name,
            image        
        )
    VALUES($1,$2) RETURNING id          
    `;

    return db.oneOrNone(sql,[
        Photo.name,
        Photo.image,
    ]);
}

module.exports = Photo;