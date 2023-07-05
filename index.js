const server = require("./src/server");
const { conn } = require('./src/db.js');
const fCargarDB = require('./src/DB_json-Postgres/fCargarDB.js');
const PORT = 3001;


console.log('puerto', PORT)
// conn.sync({ force: true })
conn.sync()
.then(() => {
  fCargarDB()
  server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
})
.catch(error => console.error(error))
