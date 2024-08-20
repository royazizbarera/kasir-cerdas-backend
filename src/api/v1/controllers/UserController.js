import UserService from "../services/UserService.js";


class UserController {
  static async getUserById(uid) {
    try {
      const userResult = await UserService.getUserByu(uid);
      
      return userResult;
    } catch (error) {
      throw error;      
    }
  }
}


export default UserController;