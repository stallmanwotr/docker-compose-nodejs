const swaggerJsDoc = require('swagger-jsdoc');

/*
 * Swagger Specification YAML:
 *   https://swagger.io/docs/specification/about/
 *
 * Swagger JSDoc:
 *   https://www.npmjs.com/package/swagger-jsdoc
 *   https://github.com/Surnet/swagger-jsdoc
 *   https://github.com/Surnet/swagger-jsdoc/blob/HEAD/docs/GETTING-STARTED.md
 */

/**
 * Header for generating Swagger docs.
 */
const options = {
    openapi: '3.0.0',  // Specification (optional, defaults to swagger: '2.0')
    info: {
        title: 'Test Server',  // required
        description: 'REST API | OpenAPI (Swagger) Specification',
        version: '1.0.0'  // required
    },
    basePath: '/rest-server'
};

/**
 * Generate from the @swagger annotations as a JavaScript object (i.e., JSON).
 */
export const swaggerSpec = swaggerJsDoc({
    swaggerDefinition: options,
    apis: [
        './src/endpoints/ServerRouter.js'
    ]
});

