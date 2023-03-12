import mongoose from "mongoose";

import { config } from "../config/env.local";
const { db } = config;
export const dbConnection = async () => {
    try {
        await mongoose.connect(`mongodb://${db.host}:${db.port}/${db.name}`);
        console.log("Database online");
    } catch (error) {
        console.log(error);
        throw new Error("Error a la hora de iniciar la base de datos");
    }
}
