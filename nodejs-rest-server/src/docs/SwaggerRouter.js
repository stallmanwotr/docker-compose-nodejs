// imports
const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');

import { swaggerSpec } from './SwaggerOptions';
import { logRequest } from '../utils/ServerUtils';

/*
 * GET
 *   Show the REST API using Swagger UI.
 *
 *   https://www.npmjs.com/package/swagger-ui-express
 */
router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerSpec));

/**
 * GET
 *   Return the OpenAPI (Swagger) spec as JSON.
 */
router.get('/swagger.json', (req, res) => {
    logRequest(req);
    res.json(swaggerSpec);
});

export default router;
