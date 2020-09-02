import {connection} from "../config/mysql.config";
export class AdminModel{
static adminLogin(username:string,password:string){
    connection.query(" SELECT count(*) FROM admin where `username`=? and `password`=? ;",
        [username,password],
        (err,result)=>
        {
            console.log("results :"+result+err);
        });
}
static adminInsert(username:string,password:string,callback:any){
        connection.query("INSERT INTO admin(`username`,`password`) values(?,?) ;",
            [username,password],
            (err,result)=>
            {
                if(err) return callback(false);
                return callback(true);
            });
    }

}
