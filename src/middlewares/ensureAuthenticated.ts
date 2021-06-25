import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
    sub: string;
}

export function ensureAuthenticated( request: Request, response: Response, next: NextFunction ) {

    // Receber o token
    const authToken = request.headers.authorization

    // Validar se token está preenchido
    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try {
        // Validar se token é válido
        const { sub } = verify( token , "093a5d227382bef4ea9a85c10994eb89") as IPayLoad;

        //Recuperar informações do usuário
        request.user_id = sub;

        return next();
    } catch (err) {
        return response.status(401).end();
    }
}
