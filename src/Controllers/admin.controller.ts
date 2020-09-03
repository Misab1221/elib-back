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
    public testsign=async(req:Request,res:Response)=>{
        let {
            uname,email,spwd,cpwd
        }=req.body;
        console.log(uname,email,spwd,cpwd);
        if(!uname||!email||!spwd||!cpwd){
            const response:BasicResponse={
                status:false,
                message:"Datas were missing"
            };
            return res.send(response);
        }
        AdminModel.signinsert(uname,email,spwd, cpwd,function(st:any){
                if(st)
                    return res.send("1 Row inserted");
                return res.send("Unable to process");
            }
        );
    }

    public addbooks=async(req:Request,res:Response)=>{
        let {
            book_id,book_name,author,publications
        }=req.body;
        console.log(book_id,book_name,author,publications);
        if(!book_id||!book_name||!author||!publications){
            const response:BasicResponse={
                status:false,
                message:"Datas were missing"
            };
            return res.send(response);
        }
        AdminModel.bookinsert(book_id,book_name,author,publications,function(st:any){
                if(st)
                    return res.send("1 Row inserted");
                return res.send("Unable to process");
            }
        );
    }

    public deletebook=async(req:Request,res:Response)=>{
        let {
            book_id,
        }=req.body;
        console.log(book_id,);
        if(!book_id){
            const response:BasicResponse={
                status:false,
                message:"Datas were missing"
            };
            return res.send(response);
        }
        AdminModel.bookdelete(book_id,function(st:any){
                if(st)
                    return res.send("1 Deleted");
                return res.send("Unable to process");
            }
        );
    }


}
