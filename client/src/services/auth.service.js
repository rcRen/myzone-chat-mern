const API_URL = "http://localhost:3001/api/auth";

export const register = (formData) => {
  return fetch(`${API_URL}/register`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
};

export const login = async (formData) => {
  return fetch(`${API_URL}/login`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("user", JSON.stringify(data));
      return data;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};

const authService = { register, login, logout };

export default authService;
