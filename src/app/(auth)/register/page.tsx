"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authSchema } from "@/schemas/authSchema";
import { registerUser } from "@/services/auth";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = async (data: any) => {
    const success = await registerUser(data.email, data.password);
    if (success) router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Registro</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-4 bg-gray-100 rounded shadow-md">
        <input 
          type="email" 
          placeholder="Email" 
          {...register("email")}
          className="p-2 border rounded"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input 
          type="password" 
          placeholder="Contraseña" 
          {...register("password")}
          className="p-2 border rounded"
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

        <button 
          type="submit" 
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Registrarse
        </button>
      </form>
    </div>
  );
}
