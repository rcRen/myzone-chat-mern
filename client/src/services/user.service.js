const API_URL = "http://localhost:3001/api/user";

export const getAllUsers = async () => {
  return fetch(`${API_URL}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const getContacts = async (id) => {
  return fetch(`${API_URL}/${id}/contacts`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const getUser = async (id) => {
  return fetch(`${API_URL}/${id}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};
