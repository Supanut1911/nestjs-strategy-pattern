import { Injectable } from '@nestjs/common';
import { AnimalService } from '../animal.service';
import { CreateAnimalDto } from '../dto/create-animal.dto';
import { updateAnimalDto } from '../dto/update-animal.dto';

@Injectable()
export class DogService implements AnimalService {
  create(createAnimalDto: CreateAnimalDto) {
    return 'This action adds a new dog';
  }

  findAll() {
    return `This action returns all dog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dog`;
  }

  update(id: number, updateAnimalDto: updateAnimalDto) {
    return `This action updates a #${id} dog`;
  }

  remove(id: number) {
    return `This action removes a #${id} dog`;
  }
}
