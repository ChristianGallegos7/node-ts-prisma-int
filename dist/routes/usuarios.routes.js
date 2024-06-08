"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const Usuarios_controller_1 = require("../controllers/Usuarios.controller");
const router = (0, express_1.Router)();
router.post('/', [
    (0, express_validator_1.body)('name').isString().notEmpty().withMessage("El nombre es obligatorio"),
    (0, express_validator_1.body)('email').isEmail().withMessage("El correo debe ser válido"),
    (0, express_validator_1.body)('password').isString().notEmpty().withMessage("La contraseña es obligatoria"),
], Usuarios_controller_1.crearUsuario);
router.get('/', Usuarios_controller_1.obtenerUsuarios);
router.get('/:id', [
    (0, express_validator_1.param)('id').isInt().withMessage("El id debe ser un número entero")
], Usuarios_controller_1.obtenerUsuario);
router.put('/:id', [
    (0, express_validator_1.param)('id').isInt().withMessage("El id debe ser un número entero"),
    (0, express_validator_1.body)('name').isString().notEmpty().withMessage("El nombre es obligatorio"),
    (0, express_validator_1.body)('email').isEmail().withMessage("El correo debe ser válido"),
    (0, express_validator_1.body)('password').isString().notEmpty().withMessage("La contraseña es obligatoria"),
], Usuarios_controller_1.actualizarUsuario);
router.delete('/:id', [
    (0, express_validator_1.param)('id').isInt().withMessage("El id debe ser un número entero")
], Usuarios_controller_1.eliminarUsuario);
exports.default = router;
//# sourceMappingURL=usuarios.routes.js.map