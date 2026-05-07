import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import cakesRouter from "./routes/cakes.js";
import orderRouter from "./routes/order.js";
import customCakeInquiryRouter from "./routes/customCakeInquiry.js";

const app = express();
const port = 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "public")));

app.get("/", (_req, res) => {
  res.json({ message: "Butter Mellow backend is running" });
});

app.use("/cakes", cakesRouter);
app.use("/order", orderRouter);
app.use("/custom-cake-inquiry", customCakeInquiryRouter);

app.listen(port, () => {
  console.log(`Butter Mellow backend running on http://localhost:${port}`);
});
