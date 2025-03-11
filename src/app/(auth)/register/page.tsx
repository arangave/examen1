"use client";

import { useState } from "react";
import { registerUser } from "@/services/auth";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await registerUser(email, password);
    if (success) router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Registro</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 bg-gray-100 rounded shadow-md">
        <input 
          type="email" 
          placeholder="Email" 
          className="p-2 border rounded"
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          className="p-2 border rounded"
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button 
          type="submit" 
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Registrarse
        </button>
      </form>
    </div>
  );
}

