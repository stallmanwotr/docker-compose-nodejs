// imports
const MongoClient = require('mongodb').MongoClient;

//const MONGO_URL = 'mongodb://localhost:27017';
//const MONGO_URL = 'mongodb://mongo:27017';
const TEST_COLLECTION = 'test_collection';

/**
 *
 */
class Database {

    // db = null;

    init(mongoUrl, callbackFn) {
        this.db = null;

        MongoClient.connect(mongoUrl, { useNewUrlParser: true })
        .then(db => {
            this.db = db.db('vms');
            callbackFn(db);
        })
        .catch(err => {
            console.error(`Error connecting to MongoDB: ${mongoUrl}: ${err}`);
        });
    }

    findByName(name) {
        const coll = this.db.collection(TEST_COLLECTION);
        coll.findOne({ name: name })
        .then(row => {
            if (!row) {
                console.info(`Row not found for name '${name}'`);
            }
            else {
                console.info(`Row found for '${name}': ${JSON.stringify(row, null, 2)}`);
            }
        });
    }

    /** Returns a Promise. */
    async findByName2(name) {
        const coll = this.db.collection(TEST_COLLECTION);
        return coll.findOne({ name: name });
    }
}

// singleton as named export
const database = new Database();

export default database;

