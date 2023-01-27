import { Inject, Injectable } from '@nestjs/common';
import { AnimalService } from '../animal.service';

@Injectable()
export class Catservice implements AnimalService {
  create() {
    return 'This action adds a new animal';
  }

  findAll() {
    return `This action returns all animal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} animal`;
  }

  update(id: number) {
    return `This action updates a #${id} animal`;
  }

  remove(id: number) {
    return `This action removes a #${id} animal`;
  }
}
