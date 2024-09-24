import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
// import fileUpload from "express-fileupload";
import routes from "./Router/AdminRoutes.js";

dotenv.config();

const app = express();
// app.use(fileUpload());

const corsOptions = {
  origin: true, // Allow all origins
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());

const port = process.env.PORT || 3000;

const connectDB = async () => {
  try {
    console.log("Attempting to connect to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
    startServer(); // Start the server after successful DB connection
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit process with failure
  }
};

app.use("/", routes);

const startServer = () => {
  console.log("Starting server...");
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

connectDB();

export { app, connectDB, startServer };
