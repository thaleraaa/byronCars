import prismaClient from "../../prisma";

class DeleteCarService {
    async execute (car_id:string) {
        if(car_id) {
            const deletedCar = await prismaClient.car.delete({
                where: {
                    id: car_id
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

            return deletedCar;
        }
    }
}

export { DeleteCarService }