const API_URL = `${process.env.REACT_APP_API_URL}/message`;

export const getMessages = async (chatId) => {
  return fetch(`${API_URL}/${chatId}`, {
    method: "post",
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};


export const sendMessage = async (chatId, senderId, receiverId, text) => {
  if (text && text !== "") {
    return fetch(`${API_URL}`, {
      method: "post",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chatId,
        senderId,
        receiverId,
        text
      })
    }).then(res => res.json())
  } else {
    return
  }
}