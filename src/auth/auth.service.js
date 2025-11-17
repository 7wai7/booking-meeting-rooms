import * as bcrypt from 'bcryptjs';
import dotenv from "dotenv";
import jwt from 'jsonwebtoken';
import { userService } from '../user/user.service';
dotenv.config();

class AuthService {
    async register(registerDto) {
        const existedUsername = await userService.findOne({ username: registerDto.username })
        if (existedUsername) throw new Error("A user with this username exists.");

        const existedEmail = await userService.findOne({ email: registerDto.email })
        if (existedEmail) throw new Error("A user with this email exists.");


        const hash = await bcrypt.hash(registerDto.password, 5);
        const createdUser = await userService.create({ ...registerDto, password: hash });
        return this.generateToken(createdUser);
    }

    async login(loginDto) {
        const user = await userService.findOne({ username: loginDto.username })
        if (!user) throw new Error("A user does not exists.");

        const result = await bcrypt.compare(loginDto.password, user.password);
        if(!result) throw new Error("A password is not correct.");

        return this.generateToken(user);
    }

    generateToken(user) {
        const userData = { id: user.id, username: user.username, role: user.role };
        return {
            token: jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: '1h' }),
            user: userData
        };
    }
}

export const authService = new AuthService();