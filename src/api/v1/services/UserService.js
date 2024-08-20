import UserModel from "../models/User.js";
import firebaseFirestore from "../../../config/firebase-firestore.js";
import COLLECTIONS from "../../../config/constant/collections.js";

class UserService {
  static async saveUser(user = new UserModel()) {
    try {
      await firebaseFirestore
        .collection(COLLECTIONS.USERS)
        .doc(user.uid)
        .set(user.toJson());
    } catch (error) {
      throw error;
    }
  }

  static async getUserById(uid) {
    console.log("Get user");
    try {
      // Ambil dokumen berdasarkan id
      const userDoc = await firebaseFirestore
        .collection(COLLECTIONS.USERS)
        .doc(uid)
        .get();

      // Periksa apakah dokumen ada
      if (!userDoc.exists) {
        throw new Error("User not found");
      }
      console.log("User ditemukan:", userDoc.data());

      // Kembalikan data pengguna
      return userDoc.data();
    } catch (error) {
      // Tangani kesalahan
      console.error("Error getting user by uid:", error);
      throw error;
    }
  }
}

export default UserService;
