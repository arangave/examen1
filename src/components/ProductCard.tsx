import { Card } from "@heroui/react";

export default function ProductCard({ product }: { product: any }) {
  return (
    <Card className="p-4">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
    </Card>
  );
}
