import axios from "axios";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const api = axios.create({
  baseURL: SUPABASE_URL,
  headers: {
    "Content-Type": "application/json",
    "apikey": SUPABASE_ANON_KEY,  // 👈 Agregamos la API Key aquí
    "Authorization": `Bearer ${SUPABASE_ANON_KEY}`  // 👈 También como Bearer Token
  },
});

// Manejar errores automáticamente
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("❌ Error en la API:", error.message);
    return Promise.reject(error);
  }
);


