import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Item } from './item.model';

@Module({
  imports: [SequelizeModule.forFeature([Item])],
  providers: [ItemsService],
  controllers: [ItemsController],
})
export class ItemsModule {}
