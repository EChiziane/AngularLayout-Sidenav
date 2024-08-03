import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
  drivers = [
    {
      id: 1,
      name: 'John Doe',
      birthDate: new Date('1980-06-15'),
      phoneNumber: '+1234567890',
      vehiclePlate: 'XYZ 1234',
      vehicleModel: 'Toyota Corolla',
      createdBy: 'Admin',
      createdAt: new Date().toISOString()
    },
    {
      id: 2,
      name: 'Jane Smith',
      birthDate: new Date('1985-11-23'),
      phoneNumber: '+0987654321',
      vehiclePlate: 'ABC 5678',
      vehicleModel: 'Honda Civic',
      createdBy: 'Admin',
      createdAt: new Date().toISOString()
    },
    {
      id: 3,
      name: 'Michael Brown',
      birthDate: new Date('1990-01-30'),
      phoneNumber: '+1122334455',
      vehiclePlate: 'DEF 9012',
      vehicleModel: 'Ford Focus',
      createdBy: 'Admin',
      createdAt: new Date().toISOString()
    },
    {
      id: 1,
      name: 'John Doe',
      birthDate: new Date('1980-06-15'),
      phoneNumber: '+1234567890',
      vehiclePlate: 'XYZ 1234',
      vehicleModel: 'Toyota Corolla',
      createdBy: 'Admin',
      createdAt: new Date().toISOString()
    },
    {
      id: 2,
      name: 'Jane Smith',
      birthDate: new Date('1985-11-23'),
      phoneNumber: '+0987654321',
      vehiclePlate: 'ABC 5678',
      vehicleModel: 'Honda Civic',
      createdBy: 'Admin',
      createdAt: new Date().toISOString()
    },
    {
      id: 3,
      name: 'Michael Brown',
      birthDate: new Date('1990-01-30'),
      phoneNumber: '+1122334455',
      vehiclePlate: 'DEF 9012',
      vehicleModel: 'Ford Focus',
      createdBy: 'Admin',
      createdAt: new Date().toISOString()
    },
    {
      id: 1,
      name: 'John Doe',
      birthDate: new Date('1980-06-15'),
      phoneNumber: '+1234567890',
      vehiclePlate: 'XYZ 1234',
      vehicleModel: 'Toyota Corolla',
      createdBy: 'Admin',
      createdAt: new Date().toISOString()
    },
    {
      id: 2,
      name: 'Jane Smith',
      birthDate: new Date('1985-11-23'),
      phoneNumber: '+0987654321',
      vehiclePlate: 'ABC 5678',
      vehicleModel: 'Honda Civic',
      createdBy: 'Admin',
      createdAt: new Date().toISOString()
    },
    {
      id: 3,
      name: 'Michael Brown',
      birthDate: new Date('1990-01-30'),
      phoneNumber: '+1122334455',
      vehiclePlate: 'DEF 9012',
      vehicleModel: 'Ford Focus',
      createdBy: 'Admin',
      createdAt: new Date().toISOString()
    },
    {
      id: 1,
      name: 'John Doe',
      birthDate: new Date('1980-06-15'),
      phoneNumber: '+1234567890',
      vehiclePlate: 'XYZ 1234',
      vehicleModel: 'Toyota Corolla',
      createdBy: 'Admin',
      createdAt: new Date().toISOString()
    },
    {
      id: 2,
      name: 'Jane Smith',
      birthDate: new Date('1985-11-23'),
      phoneNumber: '+0987654321',
      vehiclePlate: 'ABC 5678',
      vehicleModel: 'Honda Civic',
      createdBy: 'Admin',
      createdAt: new Date().toISOString()
    },
    {
      id: 3,
      name: 'Michael Brown',
      birthDate: new Date('1990-01-30'),
      phoneNumber: '+1122334455',
      vehiclePlate: 'DEF 9012',
      vehicleModel: 'Ford Focus',
      createdBy: 'Admin',
      createdAt: new Date().toISOString()
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  viewDriver(id: number) {
    // Implement view driver functionality here
    console.log('View driver with ID:', id);
  }

  editDriver(id: number) {
    // Implement edit driver functionality here
    console.log('Edit driver with ID:', id);
  }

  deleteDriver(id: number) {
    // Implement delete driver functionality here
    console.log('Delete driver with ID:', id);
  }
}
