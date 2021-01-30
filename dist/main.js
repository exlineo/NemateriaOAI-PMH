"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const express = require("express");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ['log', 'error', 'warn', 'debug'],
        cors: {
            origin: true,
            preflightContinue: false,
        }
    });
    app.use(express.static(path_1.join(process.cwd(), '../xml/')));
    console.log("Lancement du serveur");
    await app.listen(8081);
}
bootstrap();
//# sourceMappingURL=main.js.map