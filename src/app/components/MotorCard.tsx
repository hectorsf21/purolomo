import { Motor } from '@/app/data/mockMotors';
import { FiAlertTriangle, FiCheckCircle, FiPower, FiXCircle } from 'react-icons/fi';

interface MotorCardProps {
  motor: Motor;
}

const StatusIndicator = ({ status }: { status: Motor['status'] }) => {
  switch (status) {
    case 'running':
      return <div className="flex items-center text-green-600"><FiPower className="mr-2" /><span>Activo</span></div>;
    case 'stopped':
      return <div className="flex items-center text-gray-500"><FiXCircle className="mr-2" /><span>Detenido</span></div>;
    case 'maintenance':
      return <div className="flex items-center text-red-600"><FiAlertTriangle className="mr-2" /><span>En Mantenimiento</span></div>;
  }
};

export default function MotorCard({ motor }: MotorCardProps) {
  const usagePercentage = (motor.currentHours / motor.maintenanceThreshold) * 100;

  let progressBarColor = 'bg-green-500';
  let alert = false;
  if (usagePercentage > 75) progressBarColor = 'bg-yellow-500';
  if (usagePercentage > 95) {
      progressBarColor = 'bg-red-500';
      alert = true;
  }
  if (motor.status === 'maintenance') progressBarColor = 'bg-red-500';


  return (
    <div className={`p-4 bg-white rounded-lg shadow-md border-l-4 ${alert ? 'border-red-500 animate-pulse' : 'border-transparent'}`}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-800">{motor.name}</h2>
        <span className="px-2 py-1 text-xs font-semibold text-gray-600 bg-gray-200 rounded-full">{motor.id}</span>
      </div>
      <p className="text-sm text-gray-500">{motor.location}</p>

      <div className="my-4">
        <div className="flex justify-between mb-1 text-sm font-medium text-gray-600">
          <span>Horas de Uso</span>
          <span>{motor.currentHours} / {motor.maintenanceThreshold} h</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full ${progressBarColor}`}
            style={{ width: `${usagePercentage > 100 ? 100 : usagePercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t">
        <div className="text-sm font-semibold">
          <StatusIndicator status={motor.status} />
        </div>
        {alert && motor.status !== 'maintenance' && (
            <div className="flex items-center text-sm font-bold text-red-600">
                <FiAlertTriangle className="mr-1" />
                ¡Mantenimiento Requerido!
            </div>
        )}
      </div>
    </div>
  );
}