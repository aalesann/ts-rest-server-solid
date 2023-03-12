// Clase para el manejo de usuarios de MongoDB

import { User } from "../interfaces/user.interface";
import { userModel } from "../models/user.model";
import bcrypt from 'bcrypt';


export class UserRepository {

    // Método para crear un usuario
    async create(user: User) {
        try {
            const passwordHashed = await bcrypt.hash(user.password, 10);
            user.password = passwordHashed;
            const userCreated = await userModel.create(user);
            return userCreated;
        } catch (error) {
            throw error;
        }
    }

    // Método para obtener un usuario por su id
    async findById(id: string) {
        try {
            const user = await userModel.findById(id);
            return user;
        } catch (error) {
            throw error;
        }
    }

    // Método para obtener un usuario por su email
    async findByEmail(email: string) {
        try {
            const user = await userModel.findOne({ email });
            return user;
        } catch (error) {
            throw error;
        }
    }

    // Método para obtener todos los usuarios
    async findAll() {
        try {
            const users = await userModel.find();
            return users;
        } catch (error) {
            throw error;
        }
    }

    // Método para actualizar un usuario
    async update(id: string, user: User) {
        try {
            const userUpdated = await userModel.findByIdAndUpdate(id, user, { new: true });
            return userUpdated;
        } catch (error) {
            throw error;
        }
    }

    // Método para eliminar un usuario
    async delete(id: string) {
        try {
            const userDeleted = await userModel.findByIdAndDelete(id);
            return userDeleted;
        } catch (error) {
            throw error;
        }
    }

}

// Compare this snippet from src\services\UserService.ts: