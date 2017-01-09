/**
 * Created by ndasilva on 21/12/2016.
 */
var express = require("express");
var app = express();
var bodyParser= require("body-parser");
var mysql = require("mysql");
var connection = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"angular"
});
connection.connect();

app.get("/modules", function(req, res){
    connection.query("SELECT * from modules", function(err, rows){
        if(err) throw err;
        res.send(JSON.stringify(rows));
    });
});
app.get("/formateurs", function(req, res){
    connection.query("SELECT * from formateurs", function(err, rows){
        if(err) throw err;
        res.send(JSON.stringify(rows));
    });
});
app.get("/promotions", function(req, res){
    connection.query("SELECT * from promotions", function(err, rows){
        if(err) throw err;
        res.send(JSON.stringify(rows));
    });
});


var port= 8080;

app.use(express.static(__dirname+"/.."));
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());

app.listen(port, function(err){
    if(err){
        console.error(err);
    }
    console.log("serveur bien démarrer sur le port :"+port);
});