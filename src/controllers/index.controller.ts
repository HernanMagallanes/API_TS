import { Request, Response } from "express";
import { QueryResult } from "pg";

import { pool } from "../database";

export const getUser = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		const response: QueryResult = await pool.query("SELECT * FROM users");
		return res.status(200).json(response.rows);
	} catch (e) {
		console.log(e);
		return res.status(500).json("Internal Server Error");
	}
};

export const getUserbyId = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		const id = parseInt(req.params.id);
		const response: QueryResult = await pool.query(
			"SELECT * FROM users WHERE id = $1",
			[id]
		);
		return res.status(200).json(response.rows);
		// console.log(req.params.id);
		// res.send("recieved");
	} catch (e) {
		console.log(e);
		return res.status(500).json("Internal Server Error");
	}
};
/**

export const createUser = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		const response: QueryResult = await pool.query("SQL");
		return res.status(200).json(response.rows);
	} catch (e) {
		console.log(e);
		return res.status(500).json("Internal Server Error");
	}
};

export const upadateUser = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		const response: QueryResult = await pool.query("SQL");
		return res.status(200).json(response.rows);
	} catch (e) {
		console.log(e);
		return res.status(500).json("Internal Server Error");
	}
};
export const deleteUser = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		const response: QueryResult = await pool.query("SQL");
		return res.status(200).json(response.rows);
	} catch (e) {
		console.log(e);
		return res.status(500).json("Internal Server Error");
	}
};

*/
