import { Router } from "express";
const router = Router();

import {
	getUser,
	getUserbyId,
	createUser,
	updateUser,
	deleteUser,
} from "../controllers/index.controller";

router.get("/users", getUser);
router.get("/users/:id", getUserbyId);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
