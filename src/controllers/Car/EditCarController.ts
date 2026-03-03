import { Request, Response } from "express";
import { EditCarService } from "../../services/Car/EditCarService";
import { EditCarRequest } from "../../models/interfaces/Car/EditCarRequest";

class EditCarController {
    async handle(request:Request, response:Response){
        const {
            car_id,
            plate,
            color,
            year,
            name,
            brand,
            price_per_day,
            available
        }:EditCarRequest = request.body;
        const editCarService = new EditCarService();

        if(!request.file){
            throw new Error ("Error sending image!");
        } else {
            const { originalname, filename: image} = request.file;
            const editedCar = await editCarService.execute({
            car_id,
            image,
            plate,
            color,
            year,
            name,
            brand,
            price_per_day,
            available
        });
            return response.json(editedCar);
        }
    }
}

export { EditCarController }