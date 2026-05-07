import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  const { name, cake, quantity, address } = req.body;

  if (!name || !cake || !quantity || !address) {
    return res.status(400).json({
      success: false,
      message: "name, cake, quantity, and address are required",
    });
  }

  const order = {
    name,
    cake,
    quantity,
    address,
    createdAt: new Date().toISOString(),
  };

  console.log("New order received:", order);

  return res.status(201).json({
    success: true,
    message: "Order received successfully",
    order,
  });
});

export default router;
