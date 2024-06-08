"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../config/db");
const router = (0, express_1.Router)();
router.get('/', async (req, res) => {
    try {
        const roles = await db_1.prisma.role.findMany();
        res.json(roles);
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = router;
//# sourceMappingURL=roles.routes.js.map