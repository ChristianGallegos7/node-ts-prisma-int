import { Request, Response } from "express";
import { prisma } from "../config/db";

export const CrearEmpleo = async (req: Request, res: Response) => {
    const { empresaId } = req.params;
    const { titulo, descripcion, salario } = req.body;

    try {
        const empresa = await prisma.empresa.findUnique({
            where: {
                id: parseInt(empresaId)
            }
        });

        if (!empresa) {
            return res.status(404).json({
                error: "Empresa no encontrada"
            });
        }

        const empleo = await prisma.empleo.create({
            data: {
                titulo,
                descripcion,
                salario,
                empresaId: empresa.id,
                fechaCreacion: new Date()
            }
        });

        res.status(201).json(empleo);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error al crear el empleo"
        });
    }
};

export const ObtenerEmpleos = async (req: Request, res: Response) => {
    const { empresaId } = req.params;

    try {
        const empleos = await prisma.empleo.findMany({
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

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error al obtener los empleos"
        });
    }
};

export const ActualizarEmpleo = async (req: Request, res: Response) => {
    const { empleoId } = req.params;
    const { titulo, descripcion, salario } = req.body;

    try {
        const empleo = await prisma.empleo.findUnique({
            where: {
                id: parseInt(empleoId)
            }
        });

        if (!empleo) {
            return res.status(404).json({
                error: "Empleo no encontrado"
            });
        }

        const empleoActualizado = await prisma.empleo.update({
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

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error al actualizar el empleo"
        });
    }
};

export const EliminarEmpleo = async (req: Request, res: Response) => {
    const { empleoId } = req.params;

    try {
        const empleo = await prisma.empleo.findUnique({
            where: {
                id: parseInt(empleoId)
            }
        });

        if (!empleo) {
            return res.status(404).json({
                error: "Empleo no encontrado"
            });
        }

        await prisma.empleo.delete({
            where: {
                id: parseInt(empleoId)
            }
        });

        res.status(200).json({
            message: "Empleo eliminado correctamente"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error al eliminar el empleo"
        });
    }
};