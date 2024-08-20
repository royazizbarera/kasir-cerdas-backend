import express from "express";
import UserController from "../controllers/UserController.js";
import customResponse from "../services/response.js";

const router = express.Router();

router.param("uid", async (req, res, next, uid) => {
  try {
    const userResult = await UserController.getUserById(uid);
    if (!userResult) {
      return customResponse({
        res: res,
        code: 404,
        message: "Pengguna tidak ditemukan",
        errors: "Pengguna tidak ditemukan",
      });
    }
    req.user = userResult;
    next();
  } catch (error) {
    customResponse({
      res: res,
      code: 501,
      message: "Server error",
      errors: "Server error",
    });
  }
});

router.get("/:uid", async (req, res) => {
  const userResult = req.user;
  customResponse({
    res: res,
    code: 200,
    message: "Pengguna ditemukan.",
    data: userResult,
  })
});

export default router;
