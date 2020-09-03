import {connection} from "../config/mysql.config";
export class AdminModel{
static adminLogin(username:string,password:string,callback:any){
    connection.query(" SELECT count(*) as c FROM admin where `username`=? and `password`=? ;",
        [username,password],
        (err,result)=>
        {
            console.log("results :"+result[0]["c"]+err);
            if(err) return callback(false);
            if(result[0]["c"]==0)
                return callback(false);
            return callback(true);
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
