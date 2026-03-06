import { Request, Response } from "express";
import { DeleteCarService } from "../../services/Car/DeleteCarService";

class DeleteCarController {
    async handle (request: Request, response: Response) {
        const car_id = request.query.car_id as string;
        const deleteCarService = new DeleteCarService();
        const deletedCar = await deleteCarService.execute(car_id);
        return response.json(deletedCar);
    }
}

export { DeleteCarController }