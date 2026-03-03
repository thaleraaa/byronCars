import prismaClient from "../../prisma";
import { CreateCarRequest } from "../../models/interfaces/Car/CreateCarRequest";

class CreateCarService {
    async execute (
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
    }) {
            if (!image) {
                throw new Error("Missing required field: image");
            }
            if (!plate) {
                throw new Error("Missing required field: plate");
            }
            if (!color) {
                throw new Error("Missing required field: color");
            }
            if (!year) {
                throw new Error("Missing required field: year");
            }
            if (!name) {
                throw new Error("Missing required field: name");
            }
            if (!brand) {
                throw new Error("Missing required field: brand");
            }
            if (!price_per_day) {
                throw new Error("Missing required field: price_per_day");
            }
            if (available === undefined || available === null) {
                throw new Error("Missing required field: available");
            }

            const alreadyCar = await prismaClient.car.findFirst({
                where: {
                    plate: plate
                }
            });

            if(alreadyCar) {
                throw new Error ("A Car with this plate already exists");
            }

            const newCar = await prismaClient.car.create({
                data: {
                    image: image,
                    plate: plate,
                    color: color,
                    year: +year,
                    name: name,
                    brand: brand,
                    price_per_day: +price_per_day,
                    available: String(available).toLowerCase() === "true",
                    user_id: user_id
                },
                select: {
                    name: true,
                    color: true,
                    year: true,
                    brand: true,
                    plate: true
                }
            });

            return newCar;
    }
}

export { CreateCarService }