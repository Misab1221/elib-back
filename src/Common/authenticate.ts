import jwt from "jsonwebtoken"
import {AdminSecret} from "../config/authentication"
export class Authenticate{
    static setAdminToken(username:string){
        let token=jwt.sign({id:username},AdminSecret,{expiresIn: 86400});
        console.log("Token generated :"+token);
        return token;
    }
    static verifyAdminToken(token:string,callback:any){
        jwt.verify(token,AdminSecret,function(err, decoded) {
            if (err) {
                return callback(false);
            }
            return callback(true);
        });
    }
}