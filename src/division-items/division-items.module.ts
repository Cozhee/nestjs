import { Module } from '@nestjs/common';
import { DivisionItemsService } from './division-items.service';
import { DivisionItemsController } from './division-items.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DivisionItems } from './division-items.model';

@Module({
  imports: [SequelizeModule.forFeature([DivisionItems])],
  controllers: [DivisionItemsController],
  providers: [DivisionItemsService],
})
export class DivisionItemsModule {}
