import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Patch,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { Item } from './item.model';
import { ItemDto } from './dto';

@Controller('item')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @Post()
  create(@Body() dto: ItemDto): Promise<Item> {
    return this.itemService.create(dto);
  }

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Get('costCode/:id')
  itemsByCostCode(@Param('id') id: string) {
    return this.itemService.itemsByCostCode(Number(id));
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Item> {
    return this.itemService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: ItemDto): Promise<Item> {
    return this.itemService.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<number> {
    return this.itemService.remove(Number(id));
  }

  @Post('add-division/:id')
  addDivisionToItem(@Param('id') id: number, @Body() data: {}) {
    return this.itemService.addDivisionToItem(id, data);
  }
}
