import authHeader from "./auth-header";

const API_URL = REACT_APP_ENV === 'development' ? `${process.env.REACT_APP_API_URL}/user` : '/api/user';

const user = JSON.parse(localStorage.getItem("user"));
export const getAllUsers = async () => {
  return fetch(`${API_URL}`, {
    method: "post",
    headers: authHeader(),
  }).then((res) => res.json());
};

export const getContacts = async (id) => {
  return fetch(`${API_URL}/contacts`, {
    method: "post",
    headers: authHeader(),
    body: JSON.stringify({
      userId: id,
    }),
  }).then((res) => res.json());
};

export const getUserById = async (id) => {
  return fetch(`${API_URL}/${id}`, {
    method: "post",
    headers: authHeader(),
    body: JSON.stringify({
      userId: user?._id,
    }),
  }).then((res) => res.json());
};

export const addContact = async (userId, contactId) => {
  return fetch(`${API_URL}/addContact`, {
    method: "post",
    headers: authHeader(),
    body: JSON.stringify({
      userId,
      contactId,
    }),
  }).then((res) => res.json());
};
