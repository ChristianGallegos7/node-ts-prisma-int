"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export const validateEmpresaExists = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const { empresaId } = req.params;
//         const empresa = await prisma.empresa.findUnique({
//             where: {
//                 id: parseInt(empresaId)
//             }
//         });
//         if (!empresa) {
//             return res.status(404).json({
//                 error: "Empresa no encontrada"
//             });
//         }
//         next()
//     } catch (error) {
//         res.status(500).json({
//             error: "Error del servidor"
//         })
//     }
// } 
//# sourceMappingURL=empresa.js.map