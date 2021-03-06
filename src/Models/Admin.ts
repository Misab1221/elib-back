import {connection} from "../config/mysql.config";
export class AdminModel{
static adminLogin(username:string,password:string,callback:any){
    connection.query(" SELECT count(*) as c FROM admin where `username`=? and `password`=? ;",
        [username,password],
        (err,result)=>
        {
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
static bookInsert(book_title:string,author:string,publications:string,edition:string,year:string,price:string,callback:any,){
        connection.query("INSERT INTO `books` (`book_id`, `book_title`, `author`, `publications`, `edition`, `year`, `price`) VALUES (NULL,?,?,?,?,?,?) ;",
            [book_title,author,publications,edition,year,price],
            (err,result)=>
            {
                if(err) throw err;
                return callback(true);
            });
    }
static bookDelete(book_id:string,callback:any,){
        connection.query("DELETE FROM `books` WHERE `books`.`book_id` = ? ;",
            [book_id],
            (err,result)=>
            {
                if(err) throw err;
                return callback(true);
            });
    }
static bookEdit(book_id:string,book_title:string,author:string,publications:string,edition:string,year:string,price:string,callback:any,){
        connection.query("UPDATE `books` SET `book_title` = ?, `author` = ?, `publications` = ?, `edition` = ?, `year` = ?, `price` = ? WHERE `books`.`book_id` = ?;",
            [book_title,author,publications,edition,year,price,book_id],
            (err,result)=>
            {
                if(err) throw err;
                if(result.affectedRows<1)
                    return callback(false);
                return callback(true);
            });
    }
static bookGet(book_id:string,callback:any){
        connection.query("SELECT * FROM `books` WHERE `book_id` = ?",
            [book_id],
            (err,result)=>
            {
                if(err) throw err;
                console.log(result.length);
                if(result.length<1)
                    return callback(false);
                return callback(true,result[0]);
            });
    }
static booksGet(page_no:number,callback:any){
    let page=(page_no*10)-10;
        connection.query("SELECT * FROM `books` order by book_id desc limit ?,10",
            [page],
            (err,result)=>
            {
                if(err) throw err;
                console.log(result);
                if(result.length<1)
                    return callback(false);
                return callback(true,result);
            });
    }
static booksSearch(page_no:number,search:string,callback:any){
        let page=(page_no*10)-10;
        connection.query("SELECT * FROM `books` WHERE `book_title` LIKE ? or `author` LIKE ? or `publications` LIKE ? order by book_id desc limit ?,10",
            ['%'+search+'%','%'+search+'%','%'+search+'%',page],
            (err,result)=>
            {
                if(err) throw err;
                console.log(result);
                if(result.length<1)
                    return callback(false);
                return callback(true,result);
            });
    }
}
