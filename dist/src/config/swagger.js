"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
exports.options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Lya Electronic',
            version: '0.0.1',
            description: 'simple swagger test Lya electric',
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            }
        },
        servers: [
            {
                url: 'http://localhost:4021'
            }
        ]
    },
    apis: ['./src/controllers/*/*.routes.ts'], // files containing annotations as above
};
