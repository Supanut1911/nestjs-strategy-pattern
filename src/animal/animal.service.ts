import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';

@Injectable()
export class AnimalService {
  create(createAnimalDto: CreateAnimalDto) {
    return 'This action adds a new animal';
  }

  findAll() {
    return `This action returns all animal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} animal`;
  }

  update(id: number, createAnimalDto: CreateAnimalDto) {
    return `This action updates a #${id} animal`;
  }

  remove(id: number) {
    return `This action removes a #${id} animal`;
  }
}
