import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Item } from './item.model';

@Module({
  imports: [SequelizeModule.forFeature([Item])],
  providers: [ItemService],
  controllers: [ItemController],
})
export class ItemModule {}