import { Request, Response } from "express";
import { QueryResult } from "pg";

import { pool } from "../database";

export const getUser = async (req: Request, res: Response) => {
	const response: QueryResult = await pool.query("SELECT * FROM users");

	console.log(response.rows);

	res.send("users");
};
