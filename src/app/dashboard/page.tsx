// src/app/dashboard/page.tsx
'use client'; // <-- ¡MUY IMPORTANTE!

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // <-- CORREGIDO
import { motorsData, Motor } from '@/app/data/mockMotors';
import MotorCard from '@/app/components/MotorCard';
import Header from '@/app/components/Heades';

export default function DashboardPage() {
  const router = useRouter();
  // Se usa un estado para saber si el código se está ejecutando en el cliente
  // y así poder acceder a sessionStorage de forma segura.
  const [isClient, setIsClient] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [motors, setMotors] = useState<Motor[]>([]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const loggedIn = sessionStorage.getItem('isLoggedIn');
      if (!loggedIn) {
        router.push('/');
      } else {
        setIsAuthenticated(true);
        setMotors(motorsData);
      }
    }
  }, [isClient, router]);

  if (!isAuthenticated) {
    return <div className="flex items-center justify-center min-h-screen">Cargando...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container p-4 mx-auto md:p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6">
          {motors.map((motor) => (
            <MotorCard key={motor.id} motor={motor} />
          ))}
        </div>
      </main>
    </div>
  );
}