import prismaClient from "../../prisma";

class GetCarByNameService {
    async execute (name: string) {
        if(name){
            const cars = await prismaClient.car.findMany({
                where: {
                    name: {
                        contains: name,
                        mode: 'insensitive'
                    }
                }
            });
            return cars;
        }
    }
}

export { GetCarByNameService }
