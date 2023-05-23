const mgoose = require('mongoose');
const vServer = require('mongodb-memory-server').MongoMemoryServer;

vServer.create()
    .then((mongoServer) => mgoose.connect(mongoServer.getUri(), {
        useNewUrlParser: true,
        dbName: 'test',
        useUnifiedTopology: true
    }))
    .then(() => console.log('MongoDB: Connected to database'))
    .catch((err) => {
        console.log('MongoDB: Error connecting to database', err); 
        process.exit(1);
    });

    process.on('SIGINT', () => {
        mgoose.disconnect()
            .then(() => {
                console.log('MongoDB: Connection closed');
                process.exit(0);
                })
            .catch((err) => {
                console.log('MongoDB: Error closing connection', err);
                process.exit(1);
            })
    });