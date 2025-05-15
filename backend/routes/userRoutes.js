const express = require("express")
const { adminOnly, protect } = require("../middlewares/authMiddleware");
const { getUser, getUserById, deleteUser } = require("../controllers/userController");

const router = express.Router();

// User Management routes
router.get("/", protect,  getUser);
router.get("/:id", protect, getUserById);
router.delete("/:id", protect, adminOnly, deleteUser)

module.exports = router;