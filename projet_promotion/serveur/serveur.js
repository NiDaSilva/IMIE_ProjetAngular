/**
 * Created by ndasilva on 21/12/2016.
 */
var express = require("express");
var app = express();
var bodyParser= require("body-parser");
var mysql = require("mysql");
var connexion = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'angular'
});
connexion.connect();

app.get("/cursus", function(req, res){
    connexion.query("SELECT * from cursus", function(err, rows){
        if(err) throw err;
        res.send(JSON.stringify(rows));
    });
});

app.get("/promotions", function(req, res){
    connexion.query("SELECT * from promotion", function(err, rows){
        if(err) throw err;
        res.send(JSON.stringify(rows));
    });
});

app.get("/formateurs", function(req, res){
    connexion.query("SELECT * from formateur", function(err, rows){
        if(err) throw err;
        res.send(JSON.stringify(rows));
    });
});

app.get("/modules", function(req, res){
    connexion.query("SELECT * from module", function(err, rows){
        if(err) throw err;
        res.send(JSON.stringify(rows));
    });
});



// Admin

app.post('/ajoutCursus', function(req, res) {
    console.log("Ajout du cursus");
    console.log(req);
    console.log(req.nom);
    console.log(req.body);
    connexion.query('INSERT INTO cursus set nom =', req.nom, function(err) {
        if(err)
            throw err;
        return res.send(JSON.stringify({success : true}));
    });
})

app.post('/ajoutPromo', function(req, res) {
    connexion.query('INSERT INTO promotion set ?', req.body, function(err) {
        if(err)
            throw err;
        return res.send(JSON.stringify({success : true}));
    });
})

app.post('/ajoutFormateur', function(req, res) {
    connexion.query('INSERT INTO formateur set ?', req.body, function(err) {
        if(err)
            throw err;
        return res.send(JSON.stringify({success : true}));
    });
})

app.post('/ajoutModule', function(req, res) {
    connexion.query('INSERT INTO module set ?', req.body, function(err) {
        if(err)
            throw err;
        return res.send(JSON.stringify({success : true}));
    });
})

app.post('/ajoutModuleAdd', function(req, res) {
    connexion.query('INSERT INTO module_additionnel set ?', req.body, function(err) {
        if(err)
            throw err;
        return res.send(JSON.stringify({success : true}));
    });
})


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
    console.log("Serveur bien démarrer sur le port :"+port);
});