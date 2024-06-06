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
