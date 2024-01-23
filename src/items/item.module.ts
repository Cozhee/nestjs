import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Item } from './item.model';
import { ItemDivision } from './itemDivisions/itemDivision.model';

@Module({
  imports: [SequelizeModule.forFeature([Item, ItemDivision])],
  providers: [ItemService],
  controllers: [ItemController],
})
export class ItemModule { }
