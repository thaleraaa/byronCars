import prismaClient from "../../prisma";

class DeleteCarService {
    async execute (car_id:string) {
        if(car_id) {
            const deletedCar = await prismaClient.car.delete({
                where: {
                    id: car_id
                }
            });

            return deletedCar;
        }
    }
}

export { DeleteCarService }