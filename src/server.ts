import express, {Express} from 'express'
import usuariosRoutes from './routes/usuarios.routes'
import empresasRoutes from './routes/empresas.routes'

const app: Express = express();

app.use(express.json())

app.use("/api/usuarios", usuariosRoutes)
app.use("/api/empresa", empresasRoutes)



export default app;