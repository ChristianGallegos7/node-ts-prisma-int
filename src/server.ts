import express, { Express } from 'express'
import cors from 'cors'
import usuariosRoutes from './routes/usuarios.routes'
// import empresasRoutes from './routes/empresas.routes'
import rolesRoutes from './routes/roles.routes'

const app: Express = express();

app.use(express.json())
app.use(cors())
app.use("/api/usuarios", usuariosRoutes)
// app.use("/api/empresa", empresasRoutes)
app.use("/api/roles", rolesRoutes)


export default app;

