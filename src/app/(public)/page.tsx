'use client';

import { Button } from "@heroui/react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Bienvenido a la App</h1>
      <p>Gestiona productos fácilmente.</p>
      <div className="mt-4 flex gap-4">
        <Link href="/login">
          <Button>Iniciar Sesión</Button>
        </Link>
        <Link href="/register">
          <Button variant="outline">Registrarse</Button>
        </Link>
      </div>
    </div>
  );
}
