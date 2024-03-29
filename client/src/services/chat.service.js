const API_URL = process.env.REACT_APP_ENV === 'development' ? `${process.env.REACT_APP_API_URL}/chat` : '/api/chat'


export const createChat = async ({ senderId, receiverId }) => {
  return fetch(`${API_URL}`, {
    method: "post",
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
    },
    // headers: authHeader(),
    body: JSON.stringify({
      senderId,
      receiverId
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
  return fetch(`${API_URL}/find`, {
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

