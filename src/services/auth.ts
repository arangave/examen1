import { api } from "./api";

// Definir tipos para los datos del usuario
interface AuthResponse {
  user?: {
    id: string;
    email: string;
  };
  error?: {
    message: string;
  };
}

// Registrar usuario
export const registerUser = async (email: string, password: string): Promise<AuthResponse | null> => {
  try {
    const response = await api.post<AuthResponse>("/auth/v1/signup", {
      email,
      password,
    });

    if (response.status !== 200) {
      console.error("❌ Error en el registro:", response.data);
      return null;
    }

    return response.data;
  } catch (error) {
    console.error("❌ Error en el registro:", (error as any).response?.status, (error as any).message);
    return null;
  }
};

// Iniciar sesión
export const loginUser = async (email: string, password: string): Promise<AuthResponse | null> => {
  try {
    const response = await api.post<AuthResponse>("/auth/v1/token", {
      email,
      password,
      grant_type: "password",
    });

    if (response.status !== 200) {
      console.error("❌ Error en el login:", response.data);
      return null;
    }

    return response.data;
  } catch (error) {
    console.error("❌ Error en el login:", (error as any).response?.status, (error as any).message);
    return null;
  }
};
