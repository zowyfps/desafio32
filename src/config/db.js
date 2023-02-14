import dotenv from "dotenv";
import mongoose from "mongoose";
import logger from '../loggers/Log4jsLogger.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI, (err) => {
    err
        ? logger.error("error, can't connect to mongoDB")
        : logger.info("mongodb connected")
})

export default mongoose;
