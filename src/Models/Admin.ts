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
static
    adminInsert(username:string,password:string,callback:any){
        connection.query("INSERT INTO admin(`username`,`password`) values(?,?) ;",
            [username,password],
            (err,result)=>
            {
                if(err) throw err;
                return callback(true);
            });
    }

    static
    signinsert(uname:string,email:string,spwd:string,cpwd:string,callback:any){
        connection.query("INSERT INTO signup(`uname`,`email`,spwd,cpwd) values(?,?,?,?) ;",
            [uname,email,spwd,cpwd],
            (err,result)=>
            {
                if(err) throw err;
                return callback(true);
            });
    }

}
