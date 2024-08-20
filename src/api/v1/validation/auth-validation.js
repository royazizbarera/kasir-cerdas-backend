import UserModel from "../models/User.js";

// TODO: Selesaikan Implementasi validasi data user
const checkEmail = (email) => {
  var errors = [];
  if (!email) {
    errors.push("Email tidak boleh kosong");
  }
  // Todo: check regex email
  if (!email.includes("@")) {
    errors.push("Email tidak valid");
  }
  return errors;
};

const checkPassword = (password) => {
  var errors = [];
  if (!password) {
    errors.push("Password tidak boleh kosong");
  }
  if (password.length < 6) {
    errors.push("Password minimal 6 karakter");
  }
  return errors;
};

const checkPhoneNumber = (phoneNumber) => {
  var errors = [];
  if (!phoneNumber) {
    errors.push("Nomor telepon tidak boleh kosong");
  }
  return errors;
};

const checkRole = (role) => {
  var rolesValid = ["Owner", "Karyawan", "Admin"];
  var errors = [];
  if (!role) {
    errors.push("Role tidak boleh kosong");
  }
  if (!rolesValid.includes(role)) {
    errors.push(`Role ${role} tidak valid`);
  }
  return errors;
};

const checkName = (name) => {
  var errors = [];
  if (!name) {
    errors.push("Nama lengkap tidak boleh kosong");
  }
  return errors;
};

const userDataValidation = (userJson) => {
  var userSchema = UserModel.fromJson(userJson);
  console.error("Auth Validation: ", userSchema);
  var errors = [];

  errors = errors.concat(checkName(userSchema.displayName));
  errors = errors.concat(checkEmail(userSchema.email));
  errors = errors.concat(checkPassword(userSchema.password));
  errors = errors.concat(checkPhoneNumber(userSchema.phoneNumber));
  errors = errors.concat(checkRole(userSchema.role));

  return errors;
};

export { userDataValidation };
