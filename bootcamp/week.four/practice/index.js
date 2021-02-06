// @ts-check

// const Client = require('pg').Client;

const {Client} = require('pg');

const client = new Client({
    user: "postgres", 
    password: "r43lfr057",
    host: "localhost",
    port: 5432,
    database: "owners_pets",
});

client.connect()
.then(() => console.log("Connected successfuly!!"))
.then(() => client.query("select * from owners"))
// .then(() => client.query("select * from owners where first_name in ($1, $2)", ["John", "Emma"]))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end());



