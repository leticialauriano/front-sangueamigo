import { DateTime } from 'luxon';

export interface Order {
  name: string;
  price: string;
  status: 'ready' | 'pending' | 'warn';
  timestamp: string;
}

export const tableSalesData: Order[] = [
  {
    name: 'Canina Tipo A',
    price: '3',
    status: 'ready',
    timestamp: DateTime.local().minus({ minutes: 2 }).toRelative()
  },
  {
    name: 'Canina Tipo AB +',
    price: '5',
    status: 'ready',
    timestamp: DateTime.local().minus({ minutes: 6 }).toRelative()
  },  {
    name: 'Canina Tipo O+',
    price: '0',
    status: 'warn',
    timestamp: DateTime.local().minus({ minutes: 6 }).toRelative()
  },
  {
    name: 'Felina Tipo OY',
    price: '1',
    status: 'pending',
    timestamp: DateTime.local().minus({ minutes: 400 }).toRelative()
  },
  {
    name: 'Felina Tipo XY',
    price: '2',
    status: 'pending',
    timestamp: DateTime.local().minus({ minutes: 14 }).toRelative()
  },
  {
    name: 'Felina Tipo AB+',
    price: '0',
    status: 'warn',
    timestamp: DateTime.local().minus({ minutes: 14 }).toRelative()
  },
  {
    name: 'Felina Tipo O-',
    price: '0',
    status: 'warn',
    timestamp: DateTime.local().minus({ minutes: 14 }).toRelative()
  }
  
];
