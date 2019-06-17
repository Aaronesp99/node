const express = require('express')
const mysql = require('mysql')
const colors = require('colors');

var app = express();

var cn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'asistencia_oeraae'
})

cn.connect((err)=>{
    if(err) throw err;
    console.log('Conectado');
})

app.get("/", (req, res)=>{
    cn.query("SELECT * FROM practicantes", (error, result, fields) =>{
        if(error) throw error;
        console.log("SUCCESS!".red);
        console.log(result);
    })
    res.send("<h1>Bienvenido a mysql</h1>");
})
app.listen(3000)