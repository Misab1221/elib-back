import {Request, Response} from 'express';
import {connection} from "../config/mysql.config";

connection.connect(function (err){
    if(err) {
        console.log(err);
    }
    else
    {
        console.log("Connected");
    }
});
export class AdminController{
public test=async(req:Request,res:Response)=>{
    let {
        username,password
    }=req.body;
    console.log(username,password);
    connection.query("INSERT INTO `admin` ( `username`, `password`) VALUES (?, ?);",[username,password]);
return res.send("test passed admin "+username+password);
}
}