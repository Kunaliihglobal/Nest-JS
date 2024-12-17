import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './interface/user.interface';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private userModel: Model<User>) { }

    async createUser(createUserDTO: CreateUserDTO): Promise<User> {
        const user = new this.userModel(createUserDTO);
        return await user.save();
    }

    async deleteUser(userID: string): Promise<User> {
        const deletedUser = await this.userModel.findByIdAndDelete(userID);
        return deletedUser;
    }

    async getUser(userID: string): Promise<User> {
        const user = await this.userModel.findById(userID);
        return user;
    }

    async getUsers(): Promise<User[]> {
        const users = await this.userModel.find();
        return users;
    }

    async updateUser(userID: string, createUserDTO: CreateUserDTO): Promise<User> {
        const updatedUser = await this.userModel.findByIdAndUpdate(userID,
                                                                   createUserDTO,
                                                                   { new: true });
        return updatedUser;
    }
}
