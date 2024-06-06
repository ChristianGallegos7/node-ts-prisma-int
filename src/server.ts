import express from 'express'
import usuariosRoutes from './routes/usuarios.routes'
import empresasRoutes from './routes/empresas.routes'

const app = express();

app.use(express.json())

app.use("/api/usuarios", usuariosRoutes)
app.use("/api/empresas", empresasRoutes)



export default app;