import {Router} from "express";
import {AdminController} from "../Controllers/admin.controller";

const adminController=new AdminController();

const admin_routes:Router=Router();
admin_routes.post('/login',adminController.login);
admin_routes.get('/test-get',adminController.login);
admin_routes.post('/test-db',adminController.testDb);
<<<<<<< HEAD
admin_routes.post('/set-token',adminController.setToken);
admin_routes.post('/verify-token',adminController.verifyToken);
=======
admin_routes.post('/test-sign',adminController.testsign);
admin_routes.post('/add-books',adminController.addbooks);
admin_routes.post('/delete-book',adminController.deletebook);

>>>>>>> 5fbde6b73a9bb96d871bae1dc43fc10a82ffb059

export default admin_routes;