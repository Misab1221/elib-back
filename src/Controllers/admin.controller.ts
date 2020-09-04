import {Request, Response} from 'express';
import {AdminModel} from '../Models/Admin'
import {BasicResponse, Book, BookResponse, LoginResponse} from "../Common/response";
import {Authenticate} from '../Common/authenticate'

export class AdminController{
public login=async(req:Request,res:Response)=>{
    let {
        username,password
    }=req.body;
    const response:LoginResponse={
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
            response.token=token;
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

    }
public testSign=async(req:Request,res:Response)=>{
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
public addBooks=async(req:Request,res:Response)=>{
    const response:BasicResponse={status:false, message:"Data is missing"};
    let {
        book_title,author,publications,edition,year,price,token
    }=req.body;
    console.log(token);
    let auth=false;
    Authenticate.verifyAdminToken(token,function (auth_:any) {
        auth=auth_;
    });
    if(!auth){
        console.log(auth);
        response.message="Authentication required";
        return res.send(response);
    }
        console.log(book_title,author,publications);
        if(!book_title||!author||!publications||!edition||!year||!price){
            response.status=false;
            response.message="Some fields are missing";
            return res.send(response);
        }
        AdminModel.bookinsert(book_title,author,publications,edition,year,price,function(st:any){
                if(st){
                    response.status=true;
                    response.message="Book added succesfully";
                    return res.send(response);
                }
                return res.send("Unable to process");
            }
        );
    }
public editBooks=async(req:Request,res:Response)=>{
        const response:BasicResponse={status:false, message:"Data is missing"};
        let {
            book_id,book_title,author,publications,edition,year,price,token
        }=req.body;
        console.log(token);
        let auth=false;
        Authenticate.verifyAdminToken(token,function (auth_:any) {
            auth=auth_;
        });
        if(!auth){
            console.log(auth);
            response.message="Authentication required";
            return res.send(response);
        }
        console.log(book_title,author,publications);
        if(!book_id||!book_title||!author||!publications||!edition||!year||!price){
            response.status=false;
            response.message="Some fields are missing";
            return res.send(response);
        }
        AdminModel.bookEdit(book_id,book_title,author,publications,edition,year,price,function(st:any){
                if(st){
                    response.status=true;
                    response.message="Book updated succesfully";
                    return res.send(response);
                }
                response.message="Invalid book id";
                return res.send(response);
            }
        );
    };
public getBook=async(req:Request,res:Response)=>{
        const response:BookResponse={status:false, message:"Unable to fetch"};
        let {
            book_id,token
        }=req.body;
        console.log(token);
        let auth=false;
        Authenticate.verifyAdminToken(token,function (auth_:any) {
            auth=auth_;
        });
        if(!auth){
            console.log(auth);
            response.message="Authentication required";
            return res.send(response);
        }
        console.log(book_id);
        if(!book_id){
            response.status=false;
            response.message="Id is missing";
            return res.send(response);
        }
        AdminModel.bookGet(book_id,function(st:any,book:Book){
            console.log(book);
                if(st){
                    response.status=true;
                    response.book=book;
                    response.message="Book fetched succesfully";
                    return res.send(response);
                }
                response.message="Invalid book id";
                return res.send(response);
            }
        );
    };

    public deleteBook=async(req:Request,res:Response)=>{
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
