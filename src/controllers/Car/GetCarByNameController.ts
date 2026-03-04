import { Request, Response } from "express";
import { GetCarByNameService } from "../../services/Car/GetCarByNameService";

class GetCarByNameController {
    async handle (request: Request, response: Response) {
        const name = request.query.name as string;
        const getCarByNameService = new GetCarByNameService();
        const cars = await getCarByNameService.execute(name);
        return response.json(cars);
    }
}

export { GetCarByNameController }
