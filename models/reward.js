const db = require('../config/config');

const Reward = {};


Reward.getAll = () => {
    const sql = `
    SELECT 
        id,
        name,
        image,
        description,
        reward_points
    FROM 
        rewards
    Order BY 
        name    
    `;
    return db.manyOrNone(sql);
}


Reward.create = (reward) =>{

    const sql =`
    INSERT INTO
        rewards(
            name,
            image,
            description,
            reward_points,
            date         
        )
    VALUES($1,$2,$3,$4) RETURNNG id          
    `;

    return db.oneOrNone(sql,[
        reward.name,
        reward.image,
        reward.description,
        reward.reward_points,
        reward.date,
    ]);
}

module.exports = Reward;