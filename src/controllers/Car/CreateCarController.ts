import { Request, Response } from "express";
import { CreateCarService } from "../../services/Car/CreateCarService";
import { CreateCarRequest } from "../../models/interfaces/Car/CreateCarRequest";

class CreateCarController {
    async handle (request: Request, response: Response) {
        const { 
            plate, 
            color, 
            year, 
            name, 
            brand, 
            price_per_day,
            available
        }:CreateCarRequest = request.body;
        const user_id = request.user_id;
        const createCarService = new CreateCarService();

        if(!request.file){
            throw new Error ("Error sending image");
        } else {
            const { originalname, filename: image} = request.file;
        
            const newCar = await createCarService.execute(
            {
                image,
                plate,
                color,
                year,
                name,
                brand,
                price_per_day,
                available,
                user_id,
            });
            return response.json(newCar);
        }
    }
}

export { CreateCarController }