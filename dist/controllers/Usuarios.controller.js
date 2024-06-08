"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarUsuario = exports.actualizarUsuario = exports.obtenerUsuario = exports.obtenerUsuarios = exports.crearUsuario = void 0;
const db_1 = require("../config/db");
const crearUsuario = async (req, res) => {
    try {
        // Asegurarte de que roleId sea un número
        const { roleId, ...rest } = req.body;
        const nuevoUsuario = await db_1.prisma.user.create({
            data: {
                ...rest,
                roleId: parseInt(roleId, 10)
            }
        });
        res.json(nuevoUsuario);
    }
    catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({ error: "Error al crear el usuario" });
    }
};
exports.crearUsuario = crearUsuario;
const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await db_1.prisma.user.findMany();
        res.json(usuarios);
    }
    catch (error) {
        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({ error: "Error al obtener los usuarios" });
    }
};
exports.obtenerUsuarios = obtenerUsuarios;
const obtenerUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await db_1.prisma.user.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        if (!usuario) {
            return res.status(404).json({
                error: "Usuario no encontrado"
            });
        }
        res.json(usuario);
    }
    catch (error) {
        console.error("Error al obtener el usuario:", error);
    }
};
exports.obtenerUsuario = obtenerUsuario;
const actualizarUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        const usuarioExiste = await db_1.prisma.user.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        if (!usuarioExiste) {
            return res.status(404).json({
                error: "Usuario no existe"
            });
        }
        const usuarioActualizado = await db_1.prisma.user.update({
            where: {
                id: parseInt(id)
            },
            data: {}
        });
        res.status(200).json(usuarioActualizado);
    }
    catch (error) {
        console.error("Error al actualizar el usuario:", error);
    }
};
exports.actualizarUsuario = actualizarUsuario;
const eliminarUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        const usuarioExiste = await db_1.prisma.user.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        if (!usuarioExiste) {
            return res.status(404).json({
                error: "Usuario no existe"
            });
        }
        await db_1.prisma.user.delete({
            where: {
                id: parseInt(id)
            }
        });
        res.status(200).json({
            message: "Usuario eliminado correctamente"
        });
    }
    catch (error) {
        console.error("Error al eliminar el usuario:", error);
    }
};
exports.eliminarUsuario = eliminarUsuario;
//# sourceMappingURL=Usuarios.controller.js.map