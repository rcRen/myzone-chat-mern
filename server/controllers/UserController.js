import UserModel from "../models/UserModel.js";

export const getAllUsers = async (req, res) => {
  try {
    let users = await UserModel.find();
    users.map((user) => {
      const { password, ...otherInfo } = user._doc;
      return otherInfo;
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  const id = req.params.userId;
  try {
    const user = await UserModel.findById(id).contacts;
    if (user) {
      const { password, ...otherInfo } = user._doc;
      res.status(200).json({ user: otherInfo });
    } else {
      res.status(404).json({ message: "User not found." });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllContacts = async (req, res) => {
  const id = req.params.userId;
  try {
    const user = await UserModel.findById(id);
    const contacts = user.contacts;
    res.status(200).json({ contacts: contacts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addUserContact = async (req, res) => {
  console.info(req.body);
  const { userId } = req.params;
  const { contactId } = req.body;
  if (userId == contactId) {
    res.status(403).json();
  } else {
    try {
      const user = await UserModel.findById(userId);
      const contactUser = await UserModel.findById(contactId);
      if (!user.contacts.includes(contactId)) {
        await user.updateOne({ $push: { contacts: contactId } });
        await contactUser.updateOne({ $push: { contacts: userId } });
        res.status(200).json("Contact added!");
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
