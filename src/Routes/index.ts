import {Router} from "express";
import {AdminController} from "../Controllers/admin.controller";

const adminController=new AdminController();

const admin_routes:Router=Router();
admin_routes.post('/login',adminController.login);
admin_routes.get('/test-get',adminController.login);
admin_routes.post('/test-db',adminController.testDb);
admin_routes.post('/set-token',adminController.setToken);
admin_routes.post('/verify-token',adminController.verifyToken);
admin_routes.post('/test-sign',adminController.testSign);
admin_routes.post('/add-books',adminController.addBooks);
admin_routes.post('/edit-books',adminController.editBooks);
admin_routes.post('/get-book',adminController.getBook);
admin_routes.post('/delete-book',adminController.deleteBook);


export default admin_routes;