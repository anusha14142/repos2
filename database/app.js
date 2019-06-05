
var express=require("express");
var app=express();
 // connect my sql with node

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'cruds',
});
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
//end
app.listen("4201",function(err){
if(err){
    console.log('somthingworng');
}
else{
    console.log('your appliction is working on http://localhost:4201');
}
})

//http://localhost:4201/getusers
app.get("/getusers",function(req,res){
   /* var data=[
        {name:'anusha',email:'anusha@gmail.com',phone:9652354691},
        {name:'timsy',email:'timsy@gmail.com',phone:9659986795},
        {name:'rajitha',email:'rajitha@gmail.com',phone:9652354600},

    ]*/
//get data from database
var data=[];
    connection.query('SELECT *from user', function (error, results, fields) {
        if (error) {throw error} else{
            console.log(results);
            data=results;
            res.json(data);

        };
        // connected!
      });
});
