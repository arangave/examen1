import { api } from "./api";

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.post("/auth/v1/token", {
      email,
      password,
      grant_type: "password"
    });

    if (response.status !== 200) {
      console.error("❌ Error en el login:", response.data);
      return null;
    }

    return response.data;
  } catch (error: any) {
    console.error("❌ Error en el login:", error.response?.status, error.message);
    return null;
  }
};
