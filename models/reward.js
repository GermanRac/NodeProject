const db = require('../config/config');

const Reward = {};
Reward.findByCategory = (id_category) => {
    const sql =`
    SELECT 
        R.id,
        R.name,
        R.image,
        R.description,
        R.reward_points,
        R.id_category
    FROM 
        rewards AS R
	INNER JOIN
		categories AS C
	ON
		R.id_category = C.id
	WHERE
		C.id = $1
    `;
    return db.manyOrNone(sql,id_category);
}

Reward.getAll = () => {
    const sql = `
    SELECT 
        id,
        name,
        image,
        description,
        reward_points,
        id_category
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