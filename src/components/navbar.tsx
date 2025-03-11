import Link from "next/link";
import { Button } from "@heroui/react";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <Link href="/">🏠 Inicio</Link>
      <Link href="/dashboard">📦 Productos</Link>
      <Button>Salir</Button>
    </nav>
  );
}
