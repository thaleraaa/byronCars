import { Request, Response } from "express";
import { DetailUserService } from "../../services/DetailUserService";

class DetailUserController {
    async handle (request: Request, response: Response) {
        const user_id = request?.user_id;
        const detailUserService = new DetailUserService();
        const infoUser = await detailUserService.execute(user_id);
        return response.json(infoUser);
    }
}

export { DetailUserController }