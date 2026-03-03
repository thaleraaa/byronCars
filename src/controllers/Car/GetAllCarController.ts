import { Request, Response } from "express";
import { GetAllCarService } from "../../services/Car/GetAllCarService";

class GetAllCarController {
    async handle (request:Request,response:Response) {
        const getAllCarService = new GetAllCarService();
        const allCars = await getAllCarService.execute();
        return response.json(allCars);
    }
}

export { GetAllCarController }