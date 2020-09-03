import {Router} from "express";
import {AdminController} from "../Controllers/admin.controller";

const adminController=new AdminController();

const admin_routes:Router=Router();
admin_routes.post('/login',adminController.login);
admin_routes.get('/test-get',adminController.login);
admin_routes.post('/test-db',adminController.testDb);
admin_routes.post('/set-token',adminController.setToken);
admin_routes.post('/verify-token',adminController.verifyToken);

export default admin_routes;