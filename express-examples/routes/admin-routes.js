const express=require("express");
const router = express.Router();
var counter=0;
router.post('/welcome',(request,response)=>{
    //console.log('GET',request.query);
    //if(request.query.userid==request.query.pwd){
        if(request.body.userid==request.body.pwd){
        counter++;
        const productOperations= require("../model/ProductCrud");
        productOperations.add();
        //response.send(`Welcome ${request.query.userid} ${counter}`);
       // response.send(`Welcome ${request.body.userid} ${counter}`);
       response.render('welcome',{branch:request.body.branch,user:request.body.userid,prodarr:productOperations.productList});
    }
    else{
        response.send("Invalid Userid !");
    }
    
});

//router.get is only for defining subpaths

/*router.get('/logincheck',(request,response)=>{
    response.send('Login Check Logic Call ');
}) ; */
module.exports=router;