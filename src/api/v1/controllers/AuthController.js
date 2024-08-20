import UserModel from "../models/User.js";
import AuthService from "../services/AuthService.js";

class AuthController {
  static async register(user = new UserModel()) {
    try {
      const userResult = await AuthService.register(user);
      return userResult;
    } catch (error) {
      throw error;
    }
  }
  static async login(user = new UserModel()) {
    try {
      const userResult = await AuthService.login(user);
      return userResult;
    } catch (error) {
      throw error;
    }
  }
  // verify id token
  static async verifyToken(uid) {
    try {
      const userResult = await AuthService.verifyuid(token);
      return userResult;
    } catch (error) {
      throw error;
    }
  }

  static async refreshToken(token) {
    try {
      return await AuthService.refreshToken(token);
    } catch (error) {
      throw error;
    }
  }
}

export default AuthController;
