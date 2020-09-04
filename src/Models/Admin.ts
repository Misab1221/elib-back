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
                if(err) throw err;
                return callback(true);
            });
    }

    static signinsert(uname:string,email:string,spwd:string,cpwd:string,callback:any){
        connection.query("INSERT INTO signup(`uname`,`email`,spwd,cpwd) values(?,?,?,?) ;",
            [uname,email,spwd,cpwd],
            (err,result)=>
            {
                if(err) throw err;
                return callback(true);
            });
    }

    static bookinsert(book_title:string,author:string,publications:string,edition:string,year:string,price:string,callback:any,){
        connection.query("INSERT INTO `books` (`book_id`, `book_title`, `author`, `publications`, `edition`, `year`, `price`) VALUES (NULL,?,?,?,?,?,?) ;",
            [book_title,author,publications,edition,year,price],
            (err,result)=>
            {
                if(err) throw err;
                return callback(true);
            });
    }

    static bookdelete(book_id:string,callback:any){
        connection.query("DELETE from addbooks WHERE `book_id`=?  ;",
            [book_id],
            (err,result)=>
            {
                if(err) throw err;
                return callback(true);
            });
    }


}
