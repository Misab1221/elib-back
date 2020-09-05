import {Router} from "express";
import {AdminController} from "../Controllers/admin.controller";

const adminController=new AdminController();

const admin_routes:Router=Router();
admin_routes.post('/login',adminController.login);
admin_routes.post('/add-books',adminController.addBooks);
admin_routes.post('/edit-books',adminController.editBooks);
admin_routes.post('/get-book',adminController.getBook);
admin_routes.post('/delete-book',adminController.deleteBook);
admin_routes.post('/get-books',adminController.getBooks);
admin_routes.post('/search-books',adminController.searchBooks);


export default admin_routes;