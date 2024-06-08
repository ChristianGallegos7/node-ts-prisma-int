"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EliminarEmpleo = exports.ActualizarEmpleo = exports.ObtenerEmpleos = exports.CrearEmpleo = void 0;
const db_1 = require("../config/db");
const CrearEmpleo = async (req, res) => {
    const { empresaId } = req.params;
    const { titulo, descripcion, salario } = req.body;
    try {
        const empresa = await db_1.prisma.empresa.findUnique({
            where: {
                id: parseInt(empresaId)
            }
        });
        if (!empresa) {
            return res.status(404).json({
                error: "Empresa no encontrada"
            });
        }
        const empleo = await db_1.prisma.empleo.create({
            data: {
                titulo,
                descripcion,
                salario,
                empresaId: empresa.id,
                fechaCreacion: new Date()
            }
        });
        res.status(201).json(empleo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error al crear el empleo"
        });
    }
};
exports.CrearEmpleo = CrearEmpleo;
const ObtenerEmpleos = async (req, res) => {
    const { empresaId } = req.params;
    try {
        const empleos = await db_1.prisma.empleo.findMany({
            where: {
                empresaId: parseInt(empresaId)
            }
        });
        if (empleos.length === 0) {
            return res.status(404).json({
                error: "No se encontraron empleos para esta empresa"
            });
        }
        res.status(200).json(empleos);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error al obtener los empleos"
        });
    }
};
exports.ObtenerEmpleos = ObtenerEmpleos;
const ActualizarEmpleo = async (req, res) => {
    const { empleoId } = req.params;
    const { titulo, descripcion, salario } = req.body;
    try {
        const empleo = await db_1.prisma.empleo.findUnique({
            where: {
                id: parseInt(empleoId)
            }
        });
        if (!empleo) {
            return res.status(404).json({
                error: "Empleo no encontrado"
            });
        }
        const empleoActualizado = await db_1.prisma.empleo.update({
            where: {
                id: parseInt(empleoId)
            },
            data: {
                titulo,
                descripcion,
                salario
            }
        });
        res.status(200).json(empleoActualizado);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error al actualizar el empleo"
        });
    }
};
exports.ActualizarEmpleo = ActualizarEmpleo;
const EliminarEmpleo = async (req, res) => {
    const { empleoId } = req.params;
    try {
        const empleo = await db_1.prisma.empleo.findUnique({
            where: {
                id: parseInt(empleoId)
            }
        });
        if (!empleo) {
            return res.status(404).json({
                error: "Empleo no encontrado"
            });
        }
        await db_1.prisma.empleo.delete({
            where: {
                id: parseInt(empleoId)
            }
        });
        res.status(200).json({
            message: "Empleo eliminado correctamente"
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error al eliminar el empleo"
        });
    }
};
exports.EliminarEmpleo = EliminarEmpleo;
//# sourceMappingURL=Empleos.controller.js.map