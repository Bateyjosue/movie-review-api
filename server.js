import express from 'express';
import dotenv from "dotenv"
import reviews from "./api/reviews.route.js";
import cors from "cors"

dotenv.config()

const app = express();
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use('/api/v1/reviews', reviews);
app.use("*", (req, res) => {
  res.status(404).json({ error: "not found" });
})



export default app;