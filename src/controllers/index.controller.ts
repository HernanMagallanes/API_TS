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
	} catch (e) {
		console.log(e);
		return res.status(500).json("Internal Server Error");
	}
};

export const createUser = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		const { name, email } = req.body;
		const response: QueryResult = await pool.query(
			"INSERT INTO users (name, email) VALUES ($1, $2)",
			[name, email]
		);
		return res.json({
			message: "User created successfully",
			body: { user: { name, email } },
		});
	} catch (e) {
		console.log(e);
		return res.status(500).json("Internal Server Error");
	}
};

/**

export const updateUser = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		// const response: QueryResult = await pool.query("SQL");
		// return res.status(200).json(response.rows);
		// return res.status(200).json(response.rows);
		console.log(body.params);
	} catch (e) {
		console.log(e);
		return res.status(500).json("Internal Server Error");
	}
};

*/

export const deleteUser = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		const id = parseInt(req.params.id);

		await pool.query("DELETE FROM users WHERE id = $1", [id]);

		return res.json(`User ${id} deleted succeeefully`);
	} catch (e) {
		console.log(e);
		return res.status(500).json("Internal Server Error");
	}
};
