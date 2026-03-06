import { Request, Response } from "express";
import { GetCarImageService } from "../../services/Car/GetCarImageService";

class GetCarImageController {
    async handle (request:Request, response:Response) {
        const filename = request.query.image as string;
        const getCarImageService = new GetCarImageService();
        const imagePath = await getCarImageService.execute({ filename });
        return response.sendFile(imagePath);
    }
}

export { GetCarImageController }