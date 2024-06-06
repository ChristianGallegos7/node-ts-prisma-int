import { Request, Response } from "express"
import { prisma } from "../config/db"
export const ObtenerEmpleos = async (req: Request, res: Response) => {
    try {
        const empleos = await prisma.empleo.findMany()
    } catch (error) {
        
    }
}

export const ObtenerEmpleo = async (req: Request, res: Response) => {

}

export const CrearEmpleo = async (req: Request, res: Response) => {

}

export const ActualizarEmpleo = async (req: Request, res: Response) => {

}

export const EliminarEmpleo = async (req: Request, res: Response) => {

}