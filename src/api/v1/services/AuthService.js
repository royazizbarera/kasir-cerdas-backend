import { firebaseAdminAuth } from "../../../config/firebase-admin.js";
import firebaseAuth from "../../../config/firebase-auth.js";
import ResponseModel from "../models/ResponseModel.js";
import UserModel from "../models/User.js";
import UserService from "./UserService.js";

class AuthService {
  static async register(user = new UserModel()) {
    var userCredential;
    var userResult;
    var responseResult;
    var errors = [];
    try {
      userCredential = await firebaseAuth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
      userResult = userCredential.user;
      try {
        // user.uid = userResult.uid;
        await userResult.updateProfile({
          displayName: user.displayName,
          photoURL: user.urlFotoProfil,
        });
      } catch (error) {
        errors.push(error.code || error.message);
      }
      try {
        await UserService.saveUser(user);
      } catch (error) {
        errors.push(error.code || error.message);
      }
      responseResult = JSON.parse(JSON.stringify(userResult));
      responseResult.role = user.role;
      responseResult.phoneNumber = user.phoneNumber;
    } catch (error) {
      throw error;
    }
    
    
    return ResponseModel({
      code: 201,
      message: "Berhasil melakukan pendaftaran.",
      data: responseResult,
      errors: errors,
    });
  }

  static async login(user = new UserModel()) {
    try {
      const userCredential = await firebaseAuth.signInWithEmailAndPassword(
        user.email,
        user.password
      );
      const userResult = userCredential.user;
      return userResult;
    } catch (error) {
      throw error;
    }
  }
  static async logout() {
    try {
      await firebaseAuth.signOut();
    } catch (error) {
      throw error;
    }
  }
  static async refreshToken(uid) {
    try {
      var userCredential;
      var customToken = await firebaseAdminAuth.createCustomToken(uid);
      try {
        userCredential = await firebaseAuth.signInWithCustomToken(customToken);
      } catch (error) {
        throw new Error("Gagal mendapatkan data pengnguna.");
      }
      return userCredential.user;
    } catch (error) {
      switch (error.code) {
        case "auth/argument-error":
          error.code = 400;
          throw new Error("Token tidak valid argumen error.");
        case "auth/id-token-expired":
          throw new Error("Token sudah kadaluarsa.");
        default:
          throw error;
      }
    }
  }
}

export default AuthService;
