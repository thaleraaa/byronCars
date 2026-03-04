import { Router, Request, Response } from "express";
import multer from "multer";
import uploadConfig from "./config/multer"
import { CreateUserController } from "./controllers/User/CreateUserController";
import { AuthUserController } from "./controllers/User/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/User/DetailUserController";
import { DeleteUserController } from "./controllers/User/DeleteUserController";
import { EditUserController } from "./controllers/User/EditUserController";
import { CreateCarController } from "./controllers/Car/CreateCarController";
import { GetAllCarController } from "./controllers/Car/GetAllCarController";
import { EditCarController } from "./controllers/Car/EditCarController";
import { DeleteCarController } from "./controllers/Car/DeleteCarController";
import { GetCarByNameController } from "./controllers/Car/GetCarByNameController";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

router.get("/test",(request: Request, response: Response) => {
    return response.json({ok: true});
});

// User Routes
router.post("/user", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);
router.delete("/user/remove", isAuthenticated, new DeleteUserController().handle);
router.put("/user/edit", isAuthenticated, new EditUserController().handle);

//Car Router
router.post("/car", isAuthenticated, upload.single("file"), new CreateCarController().handle);
router.get("/cars", isAuthenticated, new GetAllCarController().handle);
router.get("/cars/find", isAuthenticated, new GetCarByNameController().handle);
router.put("/car/edit", isAuthenticated, upload.single("file"), new EditCarController().handle);
router.delete("/car/remove", isAuthenticated, new DeleteCarController().handle);

export { router };