const { Client } = require("pg")

const client = new Client({
    host:"localhost",
    user:"postgres",
    port: 5431,
    password: "VyperUnc0ded!",
    database: "postgres",
});

client.connect();

client.query(`Select * from students`, (err, res) => {
    if(!err) {
        console.log(res.rows);
    } else{
        console.log(err.message);
    }
    client.end;
});