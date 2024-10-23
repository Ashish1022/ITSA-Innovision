import mongoose, { Mongoose } from "mongoose";


const MONGODB_URI = process.env.MONGODB_URI!

interface MongooseConnection{
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null
}

let cache: MongooseConnection = (global as any).mongoose;

if(!cache){
    cache = (global as any).mongoose = {
        conn: null,
        promise: null
    }
}

export const connect = async() => {
    if(cache.conn) return null

    cache.promise = cache.promise || mongoose.connect(MONGODB_URI, {
        dbName: "itsa",
        bufferCommands: false,
        connectTimeoutMS: 10000
    })

    cache.conn = await cache.promise;

    return cache.conn;
}