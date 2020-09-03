import {Request, Response} from 'express';
import {AdminModel} from '../Models/Admin'
import {BasicResponse} from "../Common/response";
import {Authenticate} from '../Common/authenticate'
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
public login=async(req:Request,res:Response)=>{
    let {
        username,password
    }=req.body;
    const response:BasicResponse={
        status:false,
        message:"Unable to process"
    };
    if(!username||!password){
        response.message="Username or Password is missing";
        console.log(response);
        return res.send(response);
    }
    console.log(username,password);
    AdminModel.adminLogin(username,password,function(st:any){
        if(st){
            let token=Authenticate.setAdminToken(username);
            res.cookie("token",token);
            response.status=true;
            response.message="Successfully logged in";
            return res.send(response);
        }
        response.status=false;
        response.message="Username or password is invalid";
        return res.send(response);
    });
};
public testDb=async(req:Request,res:Response)=>{
    const response:BasicResponse={
        status:false,
        message:"Unable to process"
    };
        let token=req.cookies.token;
        let auth=false;
        Authenticate.verifyAdminToken(token,function (auth_:any) {
            auth=auth_;
        });
        if(!auth){
         console.log(auth);
         response.message="Authentication required";
          return res.send(response);
        }
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
    };
public setToken=async(req:Request,res:Response)=>{
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
        Authenticate.setAdminToken(username);
        res.send('k');
    };
public verifyToken=async(req:Request,res:Response)=>{
        let {
            token
        }=req.body;
        console.log(token);
        if(!token){
            const response:BasicResponse={
                status:false,
                message:"Token is missing"
            };
            return res.send(response);
        }
        Authenticate.verifyAdminToken(token,function (status:boolean) {
            res.send(status);
        });

    };


}
