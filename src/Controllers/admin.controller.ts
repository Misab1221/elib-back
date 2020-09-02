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
        return res.send(response);
    }
    AdminModel.adminLogin(username,password);
return res.send("test passed admin "+username+password);
};
public testDb=async(req:Request,res:Response)=>{
        let {
            username,password
        }=req.body;
        console.log(username,password);
        if(!username||!password){
            const response:BasicResponse={
                status:false,
                message:"Username or Password is missing"
            };
            return res.send(response);
        }
        AdminModel.adminInsert(username,password,function(st:any){
            if(st)
            return res.send("1 Row inserted");
            return res.send("Unable to process");
            }
        );
    }

}
