// data/mockMotors.ts

export interface Motor {
  id: string;
  name: string;
  location: string;
  status: 'running' | 'stopped' | 'maintenance';
  currentHours: number;
  maintenanceThreshold: number; // Horas a las que se requiere mantenimiento
}

export const motorsData: Motor[] = [
  {
    id: 'MTR-001',
    name: 'Molino Principal',
    location: 'Sección A1',
    status: 'running',
    currentHours: 1850,
    maintenanceThreshold: 2000,
  },
  {
    id: 'MTR-002',
    name: 'Ventilador Secado',
    location: 'Sección A2',
    status: 'running',
    currentHours: 850,
    maintenanceThreshold: 1500,
  },
  {
    id: 'MTR-003',
    name: 'Bomba de Agua #1',
    location: 'Planta de Bombeo',
    status: 'stopped',
    currentHours: 2980,
    maintenanceThreshold: 3000,
  },
  {
    id: 'MTR-004',
    name: 'Cinta Transportadora',
    location: 'Almacén Grano',
    status: 'running',
    currentHours: 4910,
    maintenanceThreshold: 5000,
  },
  {
    id: 'MTR-005',
    name: 'Elevador Central',
    location: 'Silo Principal',
    status: 'maintenance',
    currentHours: 2505,
    maintenanceThreshold: 2500,
  },
  {
    id: 'MTR-006',
    name: 'Compresor de Aire',
    location: 'Taller',
    status: 'running',
    currentHours: 1995,
    maintenanceThreshold: 2000,
  },
    {
    id: 'MTR-007',
    name: 'Mezcladora #2',
    location: 'Sección B1',
    status: 'stopped',
    currentHours: 50,
    maintenanceThreshold: 3000,
  },
  {
    id: 'MTR-008',
    name: 'Bomba de Agua #2',
    location: 'Planta de Bombeo',
    status: 'running',
    currentHours: 250,
    maintenanceThreshold: 3000,
  },
];