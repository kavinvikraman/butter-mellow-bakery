import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const { name, phone, email, eventType, quantity, flavours, deliveryDate } = req.body;

  if (!name || !phone || !email || !eventType || !quantity || !flavours || !deliveryDate) {
    return res.status(400).json({ success: false, message: "Please complete all required bulk order fields." });
  }

  if (!/^\+?[0-9\s()-]{10,15}$/.test(String(phone).trim())) {
    return res.status(400).json({ success: false, message: "Please enter a valid phone number." });
  }

  const enquiry = { ...req.body, createdAt: new Date().toISOString() };
  console.log("Bulk Order Inquiry Received:", enquiry);

  return res.status(201).json({ success: true, message: "Bulk order enquiry received." });
});

export default router;