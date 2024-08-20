import UserModel from "../models/User.js";
import customResponse from "../services/response.js";
import { userDataValidation } from "../validation/auth-validation.js";

const validateUserDataRegister = (req, res, next) => {
  const userRegister = UserModel.fromJson(req.body);
  var errors = [];

  errors = errors.concat(userDataValidation(userRegister.toJson()));

  if (errors.length > 0) {
    return customResponse({
      res: res,
      code: 400,
      message: "Data pengguna belum valid.",
      data: null,
      errors: errors,
    });
  }

  next();
};

export { validateUserDataRegister };
