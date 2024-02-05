const API_URL = process.env.REACT_APP_ENV === 'development' ? `${process.env.REACT_APP_API_URL}/auth` : '/api/auth'

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
    .then(async (res) => {
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Login failed");
      }
      return res.json();
    })
    .then((data) => {
      if (data.token) {
        localStorage.setItem("user", JSON.stringify(data));
      }
      return data;
    });
};

export const logout = () => {
  localStorage.clear();
};

const authService = { register, login, logout };

export default authService;
