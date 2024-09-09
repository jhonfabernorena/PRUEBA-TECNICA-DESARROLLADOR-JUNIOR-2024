"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const port = process.env.PORT || 3000;
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Mi API de Animales y Corrales')
        .setDescription('Documentación de la API para gestionar animales y corrales')
        .setVersion('1.0')
        .addTag('animals')
        .addTag('corrals')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(port);
    console.log(`Aplicación corriendo en http://localhost:${port}/api`);
}
bootstrap();
//# sourceMappingURL=main.js.map