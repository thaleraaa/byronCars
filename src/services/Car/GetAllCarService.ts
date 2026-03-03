import prismaClient from "../../prisma";

class GetAllCarService {
    async execute () {
        return await prismaClient.car.findMany();
    }
}

export { GetAllCarService }