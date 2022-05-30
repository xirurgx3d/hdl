import mongoose from 'mongoose';

const alias = `mongodb+srv://pipin:540193@cluster0.la9be.mongodb.net/hdl`
//const { DB_URL } = process.env;
const DB_NAME = 'hdl'
const DB_URL = 'mongodb://mongodb:27017/hdl' // 127.0.0.1:27017 //localhost:27017 // 192.168.99.100
//const DB_URL = 'mongodb://localhost:27017/hdl' 

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

const mongooseOptions2 = {
    useNewUrlParser:    true,
    useCreateIndex:     true,
    useUnifiedTopology: true,
};

// mongodb://username:password@localhost:27017/users  //127.0.0.1:27017
const connection = mongoose.connect(DB_URL, mongooseOptions);
//const connection = mongoose.connect(alias, mongooseOptions2);



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
}, 1000)