import { User, UserCreationAttrs } from "./models/user.model";

class UserService {
    async create(data) {
        return await User.create(data);
    }

    async findOne(options) {
        return await User.findOne({ where: options });
    }
}

export const userService = new UserService();