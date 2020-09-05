import mysql from "mysql";

export const connection=mysql.createPool({
    connectionLimit:10,
    host:"us-cdbr-east-02.cleardb.com",
    user:"b3963114736c57",
    password:"153c7125",
    database:"heroku_221fb4efff03422"
});
export const connection1=mysql.createPool({
    connectionLimit:10,
    host:"localhost",
    user:"misab",
    password:"123",
    database:"heroku_221fb4efff03422"
});
//con.query("CREATE DATABASE mydb_001");