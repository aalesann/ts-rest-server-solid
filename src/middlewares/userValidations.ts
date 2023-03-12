import { check } from "express-validator";
import { UserRepository } from "../repositories/UserRepository";

// Validaciones para la ruta de creación de usuarios
export const createUserValidations = [
    check('name').isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres'),
    check('email')
    .isEmail().withMessage('El email no es válido')
    .custom(async (value) => {
        // Aquí iría la lógica para verificar que el email no está registrado
        const userRepository = new UserRepository();
        const user = await userRepository.findByEmail(value);

        if (user) {
            throw('El email ya está registrado');
        }

        return true;
    }),
    check('password').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 6 caracteres')
];