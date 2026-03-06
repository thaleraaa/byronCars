import prismaClient from "../../prisma";
import { AuthUserRequest } from "../../models/interfaces/User/Auth/AuthUserRequest";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

class AuthUserService {
    async execute ({email, password}:AuthUserRequest) {
        if (!email) {
            throw new Error ("Email is required");
        }
        if (!password) {
            throw new Error ("Password is required");
        }
        
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });

        if(!user) {
            throw new Error ("Email not exists!");
        }

        const passwordValided = await compare(password, user?.password);

        if (!passwordValided) {
            throw new Error ("Wrong password!");
        }

        const token = sign(
            {
                name: user?.name,
                email: user?.email
            },
            process.env.JWT_SECRET as string,
            {
                subject: user?.id,
                expiresIn: "30d"
            }
        )

        return {
            id: user?.id,
            name: user?.name,
            email: user?.email,
            token: token
        }

    }
}

export { AuthUserService }