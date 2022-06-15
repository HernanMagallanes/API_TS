import { Pool } from "pg";

// import {} from 'dotenv'

require("dotenv").config();

const host = process.env.HOST;
const password = process.env.PASS;

export const pool = new Pool({
	user: "postgres",
	host: host,
	password: password,
	database: "ts_api_db",
	port: 5432,
});
