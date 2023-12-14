import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const register = async (
  firstName,
  lastName,
  email,
  password,
  paqueteSeleccionado
) => {
  try {
    const response = await axios.post(`${API_URL}usuarios/register`, {
      firstName,
      lastName,
      email,
      password,
      planId: paqueteSeleccionado,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error en el servicio de registro:", error.response.data);
    throw error;
  }
};

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}usuarios/login`, {
    email,
    password,
  });
  if (response.data.token) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
