const dbConfig = require("../config/db.config");



const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("connected");
//   })
//   .catch((err) => {
//     console.log("Error" + err);
//   });


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.tasks = require("./Task.model")(sequelize, Sequelize);



module.exports = db;
