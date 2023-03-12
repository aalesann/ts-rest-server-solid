import { Request, Response, Router } from "express";
import UserService from "../services/UserService";
import { createUserValidations } from "../middlewares/userValidations";
import { validarCampos } from "../middlewares/validarCampos";

const router = Router();

router.get('/users', async (req: Request, res: Response) => {

    try {
        
    const users = await UserService.findAll();
    return res.json({
        ok: true,
        users
    });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        });
    }
});

router.get('/users/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    try {

        const user = await UserService.findById(id);
        return res.json({
            ok: true,
            user
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        });
    }
});

router.post('/users', [...createUserValidations, validarCampos] ,async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    try {

        const user = await UserService.create({ name, email, password });
        return res.json({
            ok: true,
            user
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        });
    }
});

router.patch('/users/:id', async (req: Request, res: Response) => {
    const id = req.params.id;

    try {

        const user = await UserService.update(id, req.body);

        return res.json({
            ok: true,
            user
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        });
    }
});

router.delete('/users/:id', async (req: Request, res: Response) => {
    const id = req.params.id;

    try {

        const user = await UserService.delete(id);

        return res.json({
            ok: true,
            user
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        });
    }
});


            





export default router;