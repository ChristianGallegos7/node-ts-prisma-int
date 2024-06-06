import { Router } from "express";
import { body, param } from 'express-validator';
import { actualizarUsuario, crearUsuario, eliminarUsuario, obtenerUsuario, obtenerUsuarios } from "../controllers/usuarios.controller";
import { handleErrors } from "../middleware/validation";

const router = Router();

const telefonoEcuadorRegex = /^09[2-9]\d{7}$/;


router.post('/',
    [
        body('nombre').isString().notEmpty().withMessage("El nombre es obligatorio"),
        body('apellido').isString().notEmpty().withMessage("El apellido es obligatorio"),
        body('correo').isEmail().withMessage("El correo debe ser válido"),
        body('edad').isInt({ min: 0 }).withMessage("La edad debe ser un número entero"),
        body('password').isString().notEmpty().withMessage("La contraseña es obligatoria"),
        body('telefono').matches(telefonoEcuadorRegex).withMessage("El telefono debe ser un número valido")
    ],
    handleErrors,
    crearUsuario);

router.get('/', obtenerUsuarios);

router.get('/:id',
    [
        param('id').isInt().withMessage("El id debe ser un número entero")
    ],
    handleErrors,
    obtenerUsuario);


router.put('/:id',
    [
        param('id').isInt().withMessage("El id debe ser un número entero"),
        body('nombre').isString().notEmpty().withMessage("El nombre es obligatorio"),
        body('apellido').isString().notEmpty().withMessage("El apellido es obligatorio"),
        body('correo').isEmail().withMessage("El correo debe ser válido"),
        body('edad').isInt({ min: 0 }).withMessage("La edad debe ser un número entero"),
        body('password').isString().notEmpty().withMessage("La contraseña es obligatoria"),
        body('telefono').matches(telefonoEcuadorRegex).withMessage("El telefono debe ser un número valido")
    ],
    handleErrors
    , actualizarUsuario);

router.delete('/:id',
    [
        param('id').isInt().withMessage("El id debe ser un número entero")
    ],
    handleErrors
    , eliminarUsuario);


export default router