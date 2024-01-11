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
import { ItemService } from './item.service';
import { Item } from './item.model';

@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  create(@Body() itemData): Promise<Item> {
    return this.itemService.create(itemData);
  }

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Item> {
    return this.itemService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() itemData): Promise<[number, Item[]]> {
    return this.itemService.update(Number(id), itemData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<number> {
    return this.itemService.remove(Number(id));
  }
}
