import { Router } from "express";
const router = Router();

import {
	getUser,
	getUserbyId,
	createUser,
} from "../controllers/index.controller";

router.get("/users", getUser);

router.get("/users/:id", getUserbyId);

router.post("/users", createUser);

// router.put("/users/:id", getUser);
// router.delete("/users/:id", getUser);

export default router;
