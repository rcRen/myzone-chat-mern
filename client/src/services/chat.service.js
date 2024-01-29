const API_URL = "http://localhost:3001/api/chat";

export const createChat = async (data) => {
  return fetch(`${API_URL}`, {
    method: "post",
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
    },
    // headers: authHeader(),
    body: JSON.stringify({
      senderId: data.senderId,
      receiverId: data.receiverId,
    }),
  }).then((res) => res.json());
};

export const userChats = async (id) => {
  return fetch(`${API_URL}/${id}`, {
    method: "post",
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
    },
    // headers: authHeader(),
    // body: JSON.stringify({
    //   userId: id,
    // }),
  }).then((res) => res.json());
};

export const findChat = async ({ firstId, secondId }) => {
  return fetch(`${API_URL}`, {
    method: "post",
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
    },
    // headers: authHeader(),
    body: JSON.stringify({
      firstId,
      secondId,
    }),
  }).then((res) => res.json());
};

