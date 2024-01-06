import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Route Imports:
import userRoute from "./routes/user.routes.js";
// Route Url:
app.use("/api/v1", userRoute);
export default app;
