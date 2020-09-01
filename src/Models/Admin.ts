import {connection} from "../config/mysql.config";
export class AdminModel{
static adminLogin(username:string,password:string){
    connection.query(" SELECT * FROM admin where `username`=? and `password`=?;",[username,password],(err,result)=>{
        console.log("results :"+result);
    });
}
}
