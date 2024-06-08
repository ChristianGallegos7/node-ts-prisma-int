import { Request, Response } from "express";
export declare const crearUsuario: (req: Request, res: Response) => Promise<void>;
export declare const obtenerUsuarios: (req: Request, res: Response) => Promise<void>;
export declare const obtenerUsuario: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const actualizarUsuario: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const eliminarUsuario: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
