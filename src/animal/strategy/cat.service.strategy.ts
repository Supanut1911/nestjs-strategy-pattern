import { Inject, Injectable } from '@nestjs/common';
import { AnimalService } from '../animal.service';
import { CreateAnimalDto } from '../dto/create-animal.dto';
import { updateAnimalDto } from '../dto/update-animal.dto';

@Injectable()
export class Catservice implements AnimalService {
  create(createAnimalDto: CreateAnimalDto) {
    return 'This action adds a new cat';
  }

  findAll() {
    return `This action returns all cats`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateAnimalDto: updateAnimalDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
