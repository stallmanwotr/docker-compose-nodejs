// imports
const argv = require('yargs').argv;
const express = require('express');
const bodyParser = require('body-parser');

import router from './endpoints/ServerRouter';
import swaggerRouter from './docs/SwaggerRouter';
import database from './db/Database';   // singleton

// command-line arguments
const serverPort = argv.port || process.env.npm_package_config_port || 4005;
const serverPath = argv.path || process.env.npm_package_config_path || '/rest-server';
const mongoUrl = argv.mongoUrl || process.env.npm_package_config_mongoUrl || 'mongodb://localhost:27017';

// create the server for handling REST requests.
//   https://expressjs.com/en/4x/api.html
//   https://www.npmjs.com/package/body-parser#bodyparserjsonoptions
const app = express();

// static content in the 'public' directory.
//   https://expressjs.com/en/starter/static-files.html
app.use(serverPath, express.static('public'));

// validate & parse 'application/json'
//   https://www.npmjs.com/package/body-parser#bodyparserjsonoptions
app.use(bodyParser.json());

// REST service endpoints.
app.use(serverPath, router);

// OpenAPI (Swagger) documentation.
app.use(serverPath + '/api-docs', swaggerRouter);

// Wait to connect to the database, before starting the REST listener.
database.init(mongoUrl, (db) => {     // eslint-disable-line no-unused-vars
    console.info(`*** Connected to MongoDB: ${mongoUrl}`);

    app.listen(serverPort, () => {
        console.info('*** REST Service | Test ***');
        console.info(`Listening on port ${serverPort}, path '${serverPath}'`);
    });
});
