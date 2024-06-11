const db = require('../config/config');

const Event = {};

Event.create = (event) =>{

    const sql =`
    INSERT INTO
        events(
            name,
            description,
            image,
            date         
        )
    VALUES($1,$2,$3,$4) RETURNNG id          
    `;

    return db.oneOrNone(sql,[
        event.name,
        event.description,
        event.image,
        event.date,
    ]);
}

module.exports = Event;