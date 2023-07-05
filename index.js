
const PORT =  process.env.PORT;
require("dotenv").config();
const { Sequelize } = require("sequelize");
const CountryModel = require('./models/Country')
const ActivityModel = require('./models/Activity')


const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());







const {DB_DEPLOY } = process.env;
const sequelize = new Sequelize( DB_DEPLOY,
  
  {
  logging: false, 
  native: false, 
  dialectModule: pg,
});


CountryModel(sequelize);
ActivityModel(sequelize);

const { Country, Activity } = sequelize.models;

Country.belongsToMany(Activity, {through: "CountryActivity"});
Activity.belongsToMany(Country, {through: "CountryActivity"});




server.use(router);
conn.sync({ force: false })
.then(() => {
  // fCargarDB()
  server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
})
.catch(error => console.error(error))
