import express from "express";
import {
  getAllUsers,
  getUserById,
  getAllContacts,
  addUserContact,
} from "../controllers/UserController.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.post("/", auth, getAllUsers);
router.post("/contacts", auth, getAllContacts);
router.post("/addContact", auth, addUserContact);
router.post("/:userId", auth, getUserById);
// router.put("/:userId", updateUserById);
// router.put("/:userId/:contactId/delete", deleteContactUser);

export default router;
