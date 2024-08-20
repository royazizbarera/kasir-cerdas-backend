import express from "express";

const routers = express.Router();

// Import routes
import authRouter from "./auth.js";
import userRouter from "./user.js";

// Use router
routers.use("/auth", authRouter);
routers.use("/user", userRouter);

export default routers;