import mongoose from 'mongoose';

//const { DB_URL } = process.env;
const DB_NAME = 'hdl'
const DB_URL = 'localhost:27017' // 127.0.0.1:27017 //localhost:27017 // 192.168.99.100

const mongooseOptions = {
    promiseLibrary:     global.Promise,
    poolSize:           10,
    keepAlive:          30000,
    connectTimeoutMS:   5000,
    useNewUrlParser:    true,
    useFindAndModify:   false,
    useCreateIndex:     true,
    useUnifiedTopology: true,
};

// mongodb://username:password@localhost:27017/users  //127.0.0.1:27017
const connection = mongoose.connect(`mongodb://${DB_URL}/${DB_NAME}`, mongooseOptions);

setTimeout(()=>{
    connection
    .then(() => {
        // eslint-disable-next-line
        console.log(`DB '${DB_NAME}' connected`);
    })
    .catch(({ message }) => {
        // eslint-disable-next-line
        console.log(`DB ${DB_NAME} connectionError: ${message}`);
    });
}, 20 * 1000)