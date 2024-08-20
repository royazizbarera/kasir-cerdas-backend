// Import express
import express from "express";

// import dotenv
import dotenv from "dotenv";

// Initialize firebase app
import "./config/firebase-app.js";
import { firebaseAdmin } from "./config/firebase-admin.js";

// import routes
import routers from "./api/v1/routes/index.js";

// INITIALIZE SERVER
const app = express();
dotenv.config();

// Initialize PORT
const PORT = process.env.PORT || 8080;

// Initialize json format
app.use(express.json());

// Initialize middleware

  // Initialize routes
  app.use("/api/v1", routers);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});