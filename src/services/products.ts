import { api } from "./api";

// Obtener productos
export const getProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    console.error("❌ Error obteniendo productos:", error);
    return [];
  }
};

// Crear un producto
export const createProduct = async (name: string, description: string, price: number, category: string) => {
  try {
    const response = await api.post("/products", { name, description, price, category });
    return response.data;
  } catch (error) {
    console.error("❌ Error creando producto:", error);
    return null;
  }
};

// Eliminar un producto
export const deleteProduct = async (id: number) => {
  try {
    await api.delete(`/products?id=eq.${id}`);
    return true;
  } catch (error) {
    console.error("❌ Error eliminando producto:", error);
    return false;
  }
};


