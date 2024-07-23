const promise = require('bluebird');
const options = {
    promiseLib:promise,
    query: (e) => {}

}

const pgp = require('pg-promise')(options);
const types = pgp.pg.types;
types.setTypeParser(1114,function(stringValue){
    return stringValue;
});

const databaseConfig = {
    'host':'c3nv2ev86aje4j.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com',
    'port':'5432',
    'database':'deprdn0ppo0u9q',
    'user':'u55lvfj26ak8ul',
    'password': 'pa30edd172fd65a289116624b1b0a37dda367323152f0fda2d8a9dcadf01b01d8',
    'ssl': {rejectUnauthorized:false}
};

const db =pgp(databaseConfig);

module.exports = db;