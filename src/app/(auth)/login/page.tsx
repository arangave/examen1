"use client";

import { useState } from "react";
import { loginUser } from "@/services/auth";
import { useRouter } from "next/navigation";
import { Button, Input } from "@heroui/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await loginUser(email, password);
    if (success) router.push("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit">Ingresar</Button>
      </form>
    </div>
  );
}
