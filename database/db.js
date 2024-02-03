

import mongoose from "mongoose";


const DBConnection = async () => {
    const MONODB_URI = `mongodb://himanshu:hc7456947@ac-aijubev-shard-00-00.n6hr7jv.mongodb.net:27017,ac-aijubev-shard-00-01.n6hr7jv.mongodb.net:27017,ac-aijubev-shard-00-02.n6hr7jv.mongodb.net:27017/?ssl=true&replicaSet=atlas-5o8znf-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONODB_URI, { useNewUrlParser: true });
        console.log('Database connected successful');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}


export default DBConnection;