import express from 'express';

const app=express();
const port=process.env.PORT||5000;
app.get('/',(req,res)=>{
    res.send("sampless!!")
});
app.listen(port,()=>(err:any)=>{
    if(err){
        return console.error(err);
    }
    else
    {
        return console.log("Server started on port : "+port);
    }
});
