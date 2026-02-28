import { Request, Response } from "express";
import { AuthUserService } from "../../services/User/AuthUserService";
import { AuthUserRequest } from "../../models/interfaces/User/Auth/AuthUserRequest";

class AuthUserController {
    async handle (request: Request, response: Response) {
        const { email, password }:AuthUserRequest = request.body;
        const authUserService = new AuthUserService();
        const authUser = await authUserService.execute({email,password});
        return response.json(authUser);
    }
}

export { AuthUserController }