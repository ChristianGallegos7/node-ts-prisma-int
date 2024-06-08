import { Request, Response } from "express";
export declare const CrearEmpleo: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const ObtenerEmpleos: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const ActualizarEmpleo: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const EliminarEmpleo: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
