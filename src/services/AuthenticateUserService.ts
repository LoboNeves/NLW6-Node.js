import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UsersRepositories } from "../repositories/UsersRepositories";

class IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {

    async execute({email, password}: IAuthenticateRequest) {
        const userRepositories = getCustomRepository(UsersRepositories);

        // Verificar se email existe
        const user = await userRepositories.findOne({
            email
        });

        if(!user) {
            throw new Error("Email/Password Incorrect!")
        }

        // Verificar se senha está correta
        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new Error("Email/Password Incorrect!")
        }

        // Gerar token
        const token = sign({
            email: user.email
        }, "093a5d227382bef4ea9a85c10994eb89",{
            subject: user.id,
            expiresIn: "1d"
        } )

        return token;
    }
}

export { AuthenticateUserService }