var express=require('express');
var app=express();
var path=require('path');
var ejs=require('ejs');
app.set('view engine','html');
app.set('views',path.join(__dirname,'/views'));
app.engine('html',require('ejs').__express);


app.get('/index',function(req,res){
    var name='小明';
    function ren(name,age){
        this.name=name;
        this.age=age;
    }
    var person=new ren('小刚',20);
    res.render('index',{name:name,person:person});
});
app.listen(666);


