import { resolve } from "path";
import { GetCarImageRequest } from "../../models/interfaces/Car/GetCarImageRequest";
import { existsSync } from "fs";

class GetCarImageService {
    async execute ({filename}:GetCarImageRequest) {
        if(filename){
            const imagePath = resolve(__dirname, "..", "..", "..", "tmp", filename);

            if(!existsSync(imagePath)) {
                throw new Error("Image not found");
            }

            return imagePath;
        } else {
            throw new Error("Filename is required"); 
        }
    }
}

export { GetCarImageService }