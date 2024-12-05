import mongoose from "mongoose";
import getDotenv from "../utils/dotenv"; // Adjust the import path as necessary

const connectDB = async () => {
    try {
        // Use the getDotenv function to fetch MONGO_URI
        const mongoUri = getDotenv("MONGO_URI");

        console.log(mongoUri)

        const conn = await mongoose.connect(mongoUri);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB connection Error: ${error.message}`);
        process.exit(1); 
    }
};

export default connectDB;
