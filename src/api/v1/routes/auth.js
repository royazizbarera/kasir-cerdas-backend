import express from "express";
import AuthController from "../controllers/AuthController.js";
import customResponse from "../services/response.js";
import { validateUserDataRegister } from "../middlewares/auth-middleware.js";
import UserModel from "../models/User.js";

const router = express.Router();

router.post("/register", validateUserDataRegister, async (req, res) => {
  try {
    var user = await AuthController.register(UserModel.fromJson(req.body));
    
    if (user) {
      customResponse({ res: res, object: user });
      // customResponse({
      //   res: res,
      //   code: 201,
      //   message: "Berhasil melakukan pendaftaran.",
      //   data: user,
      // });
    }
    console.log("User registered:", user.email);
  } catch (error) {
    console.error("Error reg: ", error.code || error.message);
    console.error("Gagal melakukan pendaftaran");
    customResponse({
      res: res,
      code: 400,
      message: "Gagal melakukan pendaftaran.",
      errors: error.code || error.message,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    var user = await AuthController.login(UserModel.fromJson(req.body));
    if (user) {
      customResponse({
        res: res,
        code: 200,
        message: "Berhasil melakukan login.",
        data: user,
      });
    }
    console.log("User login", user.email);
  } catch (error) {
    console.error("Error login: ", error.code || error.message);
    customResponse({
      res: res,
      code: 400,
      message: "Gagal melakukan login.",
      errors: error.code || error.message,
    });
  }
});

// router.post("/verify-token", async (req, res) => {
//   try {
//     var user = await AuthController.verifyToken(req.body.token);
//     if (user) {
//       customResponse({
//         res: res,
//         code: 200,
//         message: "Berhasil melakukan verifikasi token.",
//         data: user,
//       });
//     }
//   } catch (error) {
//     customResponse({
//       res: res,
//       code: 400,
//       message: "Gagal melakukan verifikasi token.",
//       errors: error.code || error.message,
//     });
//   }
// });

router.post("/refresh-token", async (req, res) => {
  try {
    var userResult = await AuthController.refreshToken(req.body.uid);
    if (userResult) {
      customResponse({
        res: res,
        code: 201,
        message: "Berhasil memperbarui token.",
        data: userResult,
      });
    }
  } catch (error) {
    customResponse({
      res: res,
      code: Number.isInteger(error.code) ? error.code : 500,
      message: error.message || "Gagal memperbarui token.",
      errors: error.code || error.message,
    });
  }
});
export default router;
