const mysql = require("mysql2");


const db = mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"",
    database:"business"

});


db.connect((err)=>{

    if(err){
        console.log(err);
    }
    else{
        console.log("Mysql Connected");
    }

});


module.exports=db;