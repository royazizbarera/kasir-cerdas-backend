class UserModel {
  constructor({
    uid = null,
    email = null,
    emailVerified = null,
    displayName = null,
    phoneNumber = null,
    photoURL = null,
    role = null,
    password = null,
    accessToken = null,
    expirationToken = null,
  }) {
    this.uid = uid;
    this.email = email;
    this.emailVerified = emailVerified;
    this.displayName = displayName;
    this.phoneNumber = phoneNumber;
    this.photoURL = photoURL;
    this.role = role;
    this.password = password;
    this.accessToken = accessToken;
    this.expirationToken = expirationToken
  }

  static fromJson(json) {
    return new UserModel(json);
  }

  toJson() {
    return { ...this };
  }
}

export default UserModel;