import {Router} from "express";
import {AdminController} from "../Controllers/admin.controller";

const adminController=new AdminController();

const admin_routes:Router=Router();
admin_routes.post('/test',adminController.test);
admin_routes.get('/test-get',adminController.test);

export default admin_routes;