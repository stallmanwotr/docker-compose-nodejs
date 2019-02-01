// imports
const router = require('express').Router();

import database from '../db/Database';    // singleton
import { appJson, logRequest } from '../utils/ServerUtils';

/**
 * @swagger
 *
 * /:
 *   get:
 *     description: For testing the REST service is up in a browser.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: test
 *         description: For testing URL query parameters.
 *         in: query
 *         schema:
 *           type: string
 *         required: false
 *         default: ""
 */
router.get('/', async (req, res) => {
    logRequest(req);

    // database.findByName('abc');

    const row = await database.findByName2('abc');
    console.info(`GET ROW ${JSON.stringify(row)}`);

    const responseObj = {
        text: 'Please send a POST request with a JSON body.',
        json: JSON.stringify(row)
    };
    res.json(responseObj);
});

/**
 * @swagger
 *
 * /hello:
 *   post:
 *     description: Simple POST request example.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: key
 *         description: Key name to be fetched from MongoDB.
 *         in: query
 *         schema:
 *           type: string
 *         required: true
 */
router.post('/hello', appJson, (req, res) => {
    logRequest(req);
    //const bodyObj = req.body;   // parsed JSON

    const responseObj = { hello: 'world' };
    res.json(responseObj);
});

export default router;
