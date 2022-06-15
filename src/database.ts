import { Pool } from "pg";

export const pool = new Pool({
	user: "postgres",
	host: "localhost",
	password: "password2022",
	database: "ts_api_db",
	port: 5432,
});
