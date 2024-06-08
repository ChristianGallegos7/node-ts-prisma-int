"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const usuarios_routes_1 = __importDefault(require("./routes/usuarios.routes"));
// import empresasRoutes from './routes/empresas.routes'
const roles_routes_1 = __importDefault(require("./routes/roles.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/usuarios", usuarios_routes_1.default);
// app.use("/api/empresa", empresasRoutes)
app.use("/api/roles", roles_routes_1.default);
exports.default = app;
//# sourceMappingURL=server.js.map