import { Request, Response } from "express"
import { prisma } from '../config/db'

export const crearUsuario = async (req: Request, res: Response) => {
    try {
        // Asegurarte de que roleId sea un número
        const { roleId, ...rest } = req.body;
        const nuevoUsuario = await prisma.user.create({
            data: {
                ...rest,
                roleId: parseInt(roleId, 10)
            }
        });

        res.json(nuevoUsuario);
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({ error: "Error al crear el usuario" });
    }
};

export const obtenerUsuarios = async (req: Request, res: Response) => {
    try {
        const usuarios = await prisma.user.findMany();
        res.json(usuarios)
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({ error: "Error al obtener los usuarios" });
    }
}


export const obtenerUsuario = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {
        const usuario = await prisma.user.findUnique({
            where: {
                id: parseInt(id)
            }
        });

        if (!usuario) {
            return res.status(404).json({
                error: "Usuario no encontrado"
            })
        }

        res.json(usuario)

    } catch (error) {
        console.error("Error al obtener el usuario:", error);
    }
}


export const actualizarUsuario = async (req: Request, res: Response) => {

    const { id } = req.params

    try {
        const usuarioExiste = await prisma.user.findUnique({
            where: {
                id: parseInt(id)
            }
        });

        if (!usuarioExiste) {
            return res.status(404).json({
                error: "Usuario no existe"
            })
        }

        const usuarioActualizado = await prisma.user.update({
            where: {
                id: parseInt(id)
            },
            data: {}
        })

        res.status(200).json(usuarioActualizado);

    } catch (error) {
        console.error("Error al actualizar el usuario:", error);

    }
}


export const eliminarUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const usuarioExiste = await prisma.user.findUnique({
            where: {
                id: parseInt(id)
            }
        })

        if (!usuarioExiste) {
            return res.status(404).json({
                error: "Usuario no existe"
            })
        }

        await prisma.user.delete({
            where: {
                id: parseInt(id)
            }
        })

        res.status(200).json({
            message: "Usuario eliminado correctamente"
        })

    } catch (error) {
        console.error("Error al eliminar el usuario:", error);
    }

}

