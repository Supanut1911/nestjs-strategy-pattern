import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AnimalModule } from './animal/animal.module';

@Module({
  imports: [AnimalModule.register()],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
