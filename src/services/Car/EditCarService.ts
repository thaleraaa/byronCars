import prismaClient from "../../prisma";
import { EditCarRequest } from "../../models/interfaces/Car/EditCarRequest";

class EditCarService {
    async execute (
    {
        car_id,
        image, 
        plate,
        color,
        year,
        name,
        brand,
        price_per_day,
        available
    }:EditCarRequest){
        if (!car_id) {
            throw new Error("Missing required field: car_id");
        }
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

        const plateAlready = await prismaClient.car.findFirst({
            where: {
                plate: plate
            }
        });

        if(plateAlready && car_id !== plateAlready.id){
            throw new Error ("Plate already exists!");
        }

        const editedCar = await prismaClient.car.update({
            where: {
                id: car_id
            },
            data: {
                image,
                plate,
                color,
                year: +year,
                name,
                brand,
                price_per_day: +price_per_day,
                available: String(available).toLowerCase() === "true"
            },
            select: {
                name: true,
                color: true,
                year: true,
                brand: true,
                plate: true,
                price_per_day: true,
                available: true
            }
        });

        return editedCar;
    }
}

export { EditCarService }