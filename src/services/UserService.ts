// Servicio para el manejo de usuarios de MongoDB
import { User } from "../interfaces/user.interface";
import { UserRepository } from "../repositories/UserRepository";

class UserService {

    constructor(private userRepository: UserRepository) { }

    // Método para crear un usuario
    async create(user: User) {
        try {
            const userCreated = await this.userRepository.create(user);
            return userCreated;
        } catch (error) {
            throw error;
        }
    }

    // Método para obtener un usuario por su id
    async findById(id: string) {
        try {
            const user = await this.userRepository.findById(id);
            return user;
        } catch (error) {
            throw error;
        }
    }

    // Método para obtener todos los usuarios
    async findAll() {
        try {
            const users = await this.userRepository.findAll();
            return users;
        } catch (error) {
            throw error;
        }
    }

    // Método para actualizar un usuario
    async update(id: string, user: User) {
        try {
            const userUpdated = await this.userRepository.update(id, user);
            return userUpdated;
        } catch (error) {
            throw error;
        }
    }

    // Método para eliminar un usuario
    async delete(id: string) {
        try {
            const userDeleted = await this.userRepository.delete(id);
            return userDeleted;
        } catch (error) {
            throw error;
        }
    }

}

export default new UserService(new UserRepository());