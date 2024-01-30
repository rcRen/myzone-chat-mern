const API_URL = REACT_APP_ENV === 'development' ? `${process.env.REACT_APP_API_URL}/auth` : '/auth'

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
    .then((res) => {
      if (!res.ok) {
        return res.json().then((error) => {
          throw new Error(error.message || "Login failed");
        });
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
