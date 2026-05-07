import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Log the custom cake inquiry
  console.log("Custom Cake Inquiry Received:");
  console.log({
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
  });

  // Here you could:
  // 1. Save to database
  // 2. Send email to bakery
  // 3. Save to a file
  // For now, we just log it and return success

  res.status(201).json({
    success: true,
    message: "Custom cake inquiry received. We'll contact you soon!",
    timestamp: new Date().toISOString(),
  });
});

export default router;
