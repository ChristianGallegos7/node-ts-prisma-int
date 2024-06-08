import { Router } from "express";
import { prisma } from "../config/db";


const router: Router = Router();

router.get('/', async (req, res) => {
    try {
        const roles = await prisma.role.findMany()
        res.json(roles)
    } catch (error) {
        console.log(error)
    }
})



export default router;