// import { Router } from "express";
// import { body } from 'express-validator';
// import { obtenerEmpresas, obtenerEmpresa, crearEmpresa, actualizarEmpresa, eliminarEmpresa } from "../controllers/Empresas.controller";
// import { handleErrors } from "../middleware/validation";
// import { ActualizarEmpleo, CrearEmpleo, EliminarEmpleo, ObtenerEmpleos } from "../controllers/Empleos.controller";

// const router: Router = Router();
// const telefonoEcuadorRegex = /^09[2-9]\d{7}$/;


// router.get('/', obtenerEmpresas);
// router.get('/:id', obtenerEmpresa);
// router.post('/',
//     body('nombre').isString().notEmpty().withMessage('El nombre es obligatorio'),
//     body('direccion').isString().notEmpty().withMessage('La dirección es obligatoria'),
//     body('telefono').matches(telefonoEcuadorRegex).withMessage("El telefono debe ser un número valido"),
//     handleErrors,
//     crearEmpresa
// );
// router.put('/:id',
//     body('nombre').optional().isString().withMessage('El nombre debe ser una cadena de caracteres'),
//     body('direccion').optional().isString().withMessage('La dirección debe ser una cadena de caracteres'),
//     body('telefono').matches(telefonoEcuadorRegex).withMessage("El telefono debe ser un número valido"),
//     handleErrors,
//     actualizarEmpresa
// );
// router.delete('/:id', eliminarEmpresa);

// // RUTAS PARA LOS EMPLEOS YA QUE EL EMPLEO DEPENDE DE LA EMPRESA QUE CREA LA VACANTE

// router.post('/:empresaId/empleos', CrearEmpleo)

// router.get('/:empresaId/empleos', ObtenerEmpleos)

// router.put("/empleos/:empleoId", ActualizarEmpleo);

// router.delete("/empleos/:empleoId", EliminarEmpleo);



// export default router;
