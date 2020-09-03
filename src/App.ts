import express from "express";
const cookieParser = require("cookie-parser");
//const fileUpload = require("express-fileupload");
import admin_routes from "./Routes/index";
import user_routes from "./Routes/index";

import bodyParser from "body-parser";
export class App{
    public express:express.Application;
    constructor() {
        this.express=express();
        this.setCors();
        this.setMiddleWares();
        this.setRoutes();
    }
    private setRoutes():void{
        this.express.use("/admin",admin_routes);
        this.express.get('/test-get',(req,res)=>{
            res.send("test-get passed");
        });
    }
    private setCors() {
        this.express.use(function (req, res, next) {
            if (req.headers && req.headers.origin)
                res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
            next();
        });
    }
    private setMiddleWares(): void {

        //this.express.use(fileUpload());
        this.express.use(cookieParser());
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: false}));
    }

}