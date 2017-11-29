const express=require('express');
const app=express();
const ejs=require('ejs');
const bodyParser =require('body-parser');

app.set("views",__dirname+"/views");
app.set("view engine","ejs");

/*bodyParser.urlencoded(options)
 Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 and exposes the resulting object (containing the keys and values or array or nested data) on req.body*/

app.use(bodyParser.urlencoded({ extended: false }));

//console.log("Express is  ", typeof express);
//console.log("App is ",typeof app);

//To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

app.use(express.static("public"));


/*bodyParser.json(options)
Parses the text as JSON and exposes the resulting object on request.body.*/

app.use(bodyParser.json());
const adminRoute=require("./routes/admin-routes");
app.use('/admin',adminRoute);

/*var counter=0;
app.post('/welcome',(request,response)=>{
    //console.log('GET',request.query);
    //if(request.query.userid==request.query.pwd){
        if(request.body.userid==request.body.pwd){
        counter++;
        //response.send(`Welcome ${request.query.userid} ${counter}`);
        response.send(`Welcome ${request.body.userid} ${counter}`);
    }
    else{
        response.send("Invalid Userid!");
    }
    
});*/


//error handling
//You define error-handling middleware last, after other app.use() and routes calls
app.use(function(err,req,res,next){
    res.render('error',{error:'OOPS Something went wrong on Server Side'});              //500 error
});
app.use(function(req,res){
    res.render('error',{error:'You have pressed wrong key'});                            //404 error
});
 
  
/*const PORT = 3000;
app.listen(PORT,()=>console.log("Server Start"));*/

const PORT = process.env.port || 9999;
app.listen(PORT ,()=>console.log("Server is Starting...."));