import { api } from "./api";

export const registerUser = async (email: string, password: string) => {
  try {
    const response = await api.post("/register", { email, password });
    return response.data;
  } catch (error) {
    console.error("Error en el registro:", error);
    return null;
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.post("/login", { email, password });
    return response.data;
  } catch (error) {
    console.error("Error en el login:", error);
    return null;
  }
};



