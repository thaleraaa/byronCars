import { Request, Response } from "express";
import { DeleteUserService } from "../../services/User/DeleteUserService";

class DeleteUserController {
    async handle(request:Request, response: Response) {
        const user_id = request?.query.user_id as string;
        const deleteUserService = new DeleteUserService();
        const userDeleted = await deleteUserService.execute(user_id);
        return response.json(userDeleted);
    }
}

export { DeleteUserController }