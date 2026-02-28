import { Request, Response } from "express";
import { EditUserService } from "../../services/User/EditUserService";
import { EditUserRequest } from "../../models/interfaces/User/EditUserRequest";

class EditUserController {
    async handle (request: Request, response: Response){
        const {name, email}:EditUserRequest = request.body;
        const user_id = request?.user_id;
        const editUserService = new EditUserService();
        const editedUser = await editUserService.execute({name, email, user_id});
        return response.json(editedUser);
    }
}

export { EditUserController }