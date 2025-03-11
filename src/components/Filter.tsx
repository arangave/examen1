import { Input } from "@heroui/react";

export default function Filter({ onSearch }: { onSearch: (query: string) => void }) {
  return (
    <Input
      type="text"
      placeholder="Buscar productos..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
