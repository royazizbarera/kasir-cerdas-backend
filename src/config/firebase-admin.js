import admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json" assert { type: "json" };

const firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firebaseAdminAuth = admin.auth();

export { firebaseAdmin, firebaseAdminAuth };