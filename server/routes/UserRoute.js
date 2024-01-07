import express from "express";
import {
  getAllUsers,
  getUserById,
  getAllContacts,
  addUserContact,
} from "../controllers/UserController.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.get("/",auth, getAllUsers);
router.get("/:userId", getUserById);
router.get("/:userId/contacts", getAllContacts);
router.put("/:userId/addContact", addUserContact);
// router.put("/:userId", updateUserById);
// router.put("/:userId/:contactId/delete", deleteContactUser);

export default router;
