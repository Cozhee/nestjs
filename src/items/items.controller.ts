import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Patch,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.model';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body() itemData): Promise<Item> {
    return this.itemsService.create(itemData);
  }

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Item> {
    return this.itemsService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() itemData): Promise<[number, Item[]]> {
    return this.itemsService.update(Number(id), itemData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<number> {
    return this.itemsService.remove(Number(id));
  }
}
