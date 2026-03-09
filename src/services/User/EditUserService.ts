import prismaClient from "../../prisma";
import { EditUserRequest } from "../../models/interfaces/User/EditUserRequest";

class EditUserService {
    async execute ({name, email, user_id}:EditUserRequest){
        if(user_id) {
            if(!name) {
                throw new Error ("Name is required");
            }
            if(!email) {
                throw new Error ("Email is required");
            }

            const emailAlready = await prismaClient.user.findFirst({
                where: {
                    email: email
                }
            });


            if(emailAlready && emailAlready.id !== user_id) {
                throw new Error ("Email already exists!");
            }
            const editedUser = await prismaClient.user.update({
                where: {
                    id: user_id
                }, 
                data: {
                    name: name,
                    email: email
                },
                select: {
                    name: true,
                    email: true
                }
            });

            return editedUser;
        }
    }
}

export { EditUserService }