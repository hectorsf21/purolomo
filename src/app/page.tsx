// src/app/page.tsx
'use client'; // <-- ¡MUY IMPORTANTE!

import { useRouter } from 'next/navigation'; // <-- CORREGIDO
import { FormEvent } from 'react';

export default function LoginPage() {
  const router = useRouter(); // <-- CORREGIDO

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem('isLoggedIn', 'true');
    router.push('/dashboard');
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Sistema de Monitoreo de Motores
        </h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Usuario
            </label>
            <input id="email" name="email" type="email" required defaultValue="admin@purolomo.com"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input id="password" name="password" type="password" required defaultValue="password"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </main>
  );
}