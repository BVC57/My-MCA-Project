const express=require('express');
const mysql=require('mysql');

const app=express();
// create database connection
var con=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"pdf_parser"
});

con.connect(function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("pdf Parser Database connected")
    }
 });
 app.get("/insertbu",(req,res)=>{
// res.send("insert data")
    var cn1=req.body.cn;
    var bu1=req.body.bu;
       
    var sql = "INSERT INTO bu (Company Name,BU) values ('"+cn1+"','"+bu1+"')";

            // console.log(sql)
            con.query(sql,function(err,result){
                if(err){
                    res.send("error")
                }
                else{
                    res.send({msg:"ok",data:result})
                
                }
            
            })
});
app.get("/",(req,res)=>{

    res.send("wellcome into server");
});
app.listen(4001, () => {
  console.log('Server listening on port 4001');
});