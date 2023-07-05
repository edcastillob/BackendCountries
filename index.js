const server = require("./src/server");
const { conn } = require('./src/db.js');
// const fCargarDB = require('./src/DB_json-Postgres/fCargarDB.js');
const PORT =  process.env.PORT;
// const PORT =  process.env.PORT || 3001;


conn.sync({ force: false })
.then(() => {
  // fCargarDB()
  server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
})
.catch(error => console.error(error))
