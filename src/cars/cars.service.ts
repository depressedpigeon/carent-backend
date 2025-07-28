import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  findAll() {
    return [
      {
        id: 1,
        model: 'Toyota Camry',
        price: 42,
        seats: 5,
        transmission: 'Automatic',
        mpg: 28,
        image: 'car1.png',
      },
      {
        id: 2,
        model: 'Honda Civic',
        price: 35,
        seats: 5,
        transmission: 'CVT',
        mpg: 32,
        image: 'car2.png',
      },
    ];
  }
}
