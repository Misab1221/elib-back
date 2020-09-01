import {Request, Response} from 'express';
import {AdminModel} from '../Models/Admin'
import {BasicResponse} from "../Common/response";
// connection.connect(function (err){
//     if(err) {
//         console.log(err);
//     }
//     else
//     {
//         console.log("Connected");
//     }
// });
export class AdminController{
public test=async(req:Request,res:Response)=>{
    let {
        username,password
    }=req.body;
    console.log(username,password);
    if(!username||!password){
        const response:BasicResponse={
            status:false,
            message:"Username or Password is missing"
        };
        AdminModel.adminLogin(username,password);
        return res.send(response);
    }
return res.send("test passed admin "+username+password);
}
}