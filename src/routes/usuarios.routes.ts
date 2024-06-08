import { Router } from "express";
import { body, param } from 'express-validator';
import { actualizarUsuario, crearUsuario, eliminarUsuario, obtenerUsuario, obtenerUsuarios } from "../controllers/Usuarios.controller";

const router: Router = Router();



router.post('/',
    [
        body('name').isString().notEmpty().withMessage("El nombre es obligatorio"),
        body('email').isEmail().withMessage("El correo debe ser válido"),
        body('password').isString().notEmpty().withMessage("La contraseña es obligatoria"),
    ],
    crearUsuario);

router.get('/', obtenerUsuarios);

router.get('/:id',
    [
        param('id').isInt().withMessage("El id debe ser un número entero")
    ],
    obtenerUsuario);


router.put('/:id',
    [
        param('id').isInt().withMessage("El id debe ser un número entero"),
        body('name').isString().notEmpty().withMessage("El nombre es obligatorio"),
        body('email').isEmail().withMessage("El correo debe ser válido"),
        body('password').isString().notEmpty().withMessage("La contraseña es obligatoria"),
    ],
    actualizarUsuario);

router.delete('/:id',
    [
        param('id').isInt().withMessage("El id debe ser un número entero")
    ], eliminarUsuario);


export default router