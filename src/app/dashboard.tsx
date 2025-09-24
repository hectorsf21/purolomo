// pages/dashboard.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { motorsData, Motor } from '@/app/data/mockMotors';
import MotorCard from '@/app/components/MotorCard';
import Header from '@/app/components/Heades';

export default function Dashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [motors, setMotors] = useState<Motor[]>([]);

  useEffect(() => {
    // Simula la protección de la ruta
    const loggedIn = sessionStorage.getItem('isLoggedIn');
    if (!loggedIn) {
      router.push('/');
    } else {
      setIsAuthenticated(true);
      // En una app real, aquí harías una llamada a tu API para obtener los datos
      setMotors(motorsData);
    }
  }, [router]);

  if (!isAuthenticated) {
    // Muestra un loader o nada mientras se verifica la autenticación
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