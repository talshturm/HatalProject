import { Request, Response } from 'express';
import { loginService } from '../Services/authService';
import { StatusCodes } from 'http-status-codes';

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        const { token, user } = await loginService(username, password);
        res.json({ token, user });
    } catch (error) {
        res.status(StatusCodes.NOT_FOUND).json({ message: 'Something went wrong' });
    }
};
