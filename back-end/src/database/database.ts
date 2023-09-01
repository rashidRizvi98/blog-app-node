import { Sequelize } from "sequelize-typescript";
import { createdb } from "pgtools";
import { getLogger } from "../helpers/logger";
import { dbConfig } from "../config/config";
import { User } from "./models/user";
import { Blog } from "./models/blog";

const logger = getLogger('DATABASE');

export const connection = new Sequelize({
    username: dbConfig.username,
    password: dbConfig.password,
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: "postgres",
    database: dbConfig.name,
    logging: false,
    models: [User, Blog]
})

export const createDatabase = async (dbName: string) => {
    await createdb({
        user: dbConfig.username,
        password: dbConfig.password,
        host: dbConfig.host,
        port: dbConfig.port
    }, dbName);
}

export const initializeDatabase =async () => {

    try {
        await createDatabase(dbConfig.name);        
    } catch (error) {
    }

    try {
        await connection.sync({force: false,alter: true});
        logger.info("SYNCED  DB SUCCESSFULLY");  
    } catch (error) {
        logger.error("FAILED TO ESTABLISH DB CONNECTION: ",error);
    }
}