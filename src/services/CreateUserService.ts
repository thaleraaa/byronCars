import { hash } from "bcryptjs";
import { CreateUserRequest } from "../models/interfaces/User/CreateUserRequest";
import prismaClient from "../prisma";

class CreateUserService {
    async execute ({ name, email, password}: CreateUserRequest) {
        if (!name) {
            throw new Error ("Name is required");
        }
        if (!email) {
            throw new Error ("Email is required");
        }
        if (!password) {
            throw new Error ("Password is required")
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });

        if (userAlreadyExists) {
            throw new Error ("Email already exists");
        }

        const newPassword = await hash(password, 8);

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: newPassword
            },
            select: {
                name: true,
                email: true
            }
        });

        return user

    }
}

export { CreateUserService }