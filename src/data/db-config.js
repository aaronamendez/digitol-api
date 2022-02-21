import knex from "knex";
import knexfile from "../../knexfile";
import dotenv from "dotenv";
dotenv.config();

const environment = process.env.NODE_ENV || "development";

export const db = knex(knexfile[environment]);
