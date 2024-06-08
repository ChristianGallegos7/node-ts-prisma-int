"use strict";
// import { Request, Response } from "express";
// import { prisma } from '../config/db';
// import { validationResult } from 'express-validator';
Object.defineProperty(exports, "__esModule", { value: true });
// // Obtener todas las empresas
// export const obtenerEmpresas = async (req: Request, res: Response) => {
//     try {
//         const empresas = await prisma.empresa.findMany();
//         res.json(empresas);
//     } catch (error) {
//         res.status(500).json({ error: 'Error al obtener empresas' });
//     }
// }
// // Obtener una empresa por ID
// export const obtenerEmpresa = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     try {
//         const empresa = await prisma.empresa.findUnique({
//             where: { id: parseInt(id) },
//         });
//         if (!empresa) {
//             return res.status(404).json({ error: 'Empresa no encontrada' });
//         }
//         res.json(empresa);
//     } catch (error) {
//         res.status(500).json({ error: 'Error al obtener la empresa' });
//     }
// }
// // Crear una nueva empresa
// export const crearEmpresa = async (req: Request, res: Response) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }
//     const { nombre, direccion, telefono } = req.body;
//     try {
//         const nuevaEmpresa = await prisma.empresa.create({
//             data: {
//                 nombre,
//                 direccion,
//                 telefono,
//             },
//         });
//         res.status(201).json(nuevaEmpresa);
//     } catch (error) {
//         res.status(500).json({ error: 'Error al crear la empresa' });
//     }
// }
// // Actualizar una empresa por ID
// export const actualizarEmpresa = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }
//     const { nombre, direccion, telefono } = req.body;
//     try {
//         const empresaActualizada = await prisma.empresa.update({
//             where: { id: parseInt(id) },
//             data: {
//                 nombre,
//                 direccion,
//                 telefono,
//             },
//         });
//         res.json(empresaActualizada);
//     } catch (error) {
//         res.status(500).json({ error: 'Error al actualizar la empresa' });
//     }
// }
// // Eliminar una empresa por ID
// export const eliminarEmpresa = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     try {
//         await prisma.empresa.delete({
//             where: { id: parseInt(id) },
//         });
//         res.status(204).send();
//     } catch (error) {
//         res.status(500).json({ error: 'Error al eliminar la empresa' });
//     }
// }
//# sourceMappingURL=Empresas.controller.js.map