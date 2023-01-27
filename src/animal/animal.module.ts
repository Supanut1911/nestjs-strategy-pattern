import { ClassProvider, DynamicModule, Module } from '@nestjs/common';
import { AnimalController } from './animal.controller';
import { AnimalService } from './animal.service';
import * as dotenv from 'dotenv';
import { AnimalEnum } from 'src/enum/animal.enum';
import { DogService } from './strategy/dog.service.strategy';
import { Catservice } from './strategy/cat.service.strategy';

dotenv.config();

@Module({
  controllers: [AnimalController],
  providers: [AnimalService],
})
export class AnimalModule {
  public static register(): DynamicModule {
    const animalProvider = AnimalModule.getClassProvider();
    return {
      module: AnimalModule,
      controllers: [AnimalController],
      providers: [animalProvider],
      exports: [AnimalService],
    };
  }

  private static getClassProvider(): ClassProvider<AnimalService> {
    const animalStrategy = process.env.ANIMAL_STRATEGY as AnimalEnum;
    const AnimalServiceClass =
      AnimalModule.getClassFromStrategy(animalStrategy);
    return {
      provide: AnimalService,
      useClass: AnimalServiceClass,
    };
  }

  private static getClassFromStrategy(strategy: AnimalEnum) {
    switch (strategy) {
      case AnimalEnum.DOG: {
        return DogService;
      }
      case AnimalEnum.CAT: {
        return Catservice;
      }
      default: {
        return AnimalService;
      }
    }
  }
}
