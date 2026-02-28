import prismaClient from "../../prisma";

class DeleteUserService {
    async execute(user_id: string) {
        if(user_id){
            const userRemoved = await prismaClient.user.delete({
                where: {
                    id: user_id
                }
            });

            return userRemoved;
        }
    }
}

export { DeleteUserService }