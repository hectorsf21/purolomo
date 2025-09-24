// src/components/Header.tsx
'use client'; // <-- ¡MUY IMPORTANTE!

import { useRouter } from 'next/navigation'; // <-- CORREGIDO
import { FiLogOut } from 'react-icons/fi';

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    router.push('/');
  };

  return (
    <header className="w-full p-4 bg-white shadow-md">
      <div className="container flex items-center justify-between mx-auto">
        <h1 className="text-xl font-bold text-gray-800">Dashboard de Motores</h1>
        <button
          onClick={handleLogout}
          className="flex items-center px-4 py-2 font-semibold text-red-600 bg-red-100 rounded-md hover:bg-red-200"
        >
          <FiLogOut className="mr-2" />
          Cerrar Sesión
        </button>
      </div>
    </header>
  );
}