"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/services/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@heroui/react";

export default function DashboardPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <Button>Agregar Producto</Button>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
