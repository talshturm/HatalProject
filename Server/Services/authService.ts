import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AppDataSource } from '../data-source';
import { User } from '../entities/user.entity';

const userRepository = AppDataSource.getRepository(User);

export const loginService = async (username: string, password: string) => {
    const user = await userRepository.findOne({ where: { username } });
    if (!user) {
        throw new Error('Invalid username or password');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid username or password');
    }

    const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
    return { token, user: { id: user.id, username: user.username } };
};
