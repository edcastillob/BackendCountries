const server = require("./src/server");
const { conn } = require('./src/db.js');
const fCargarDB = require('./src/DB_json-Postgres/fCargarDB.js');
const DB_PORT = 3001 || process.env.PORT;


conn.sync({ force: false })
.then(() => {
  fCargarDB()
  server.listen(DB_PORT, () => {
  console.log(`Server listening on port: ${DB_PORT}`);
})
})
.catch(error => console.error(error))
