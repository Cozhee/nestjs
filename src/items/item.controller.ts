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
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('items')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Create Item' })
  create(@Body() dto: ItemDto): Promise<Item> {
    return this.itemService.create(dto);
  }

  @Get()
  @ApiOkResponse({ description: 'Find all items' })
  findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Get('costCode/:id')
  @ApiOkResponse({ description: 'Fetch items in a cost code group' })
  itemsByCostCode(@Param('id') id: string) {
    return this.itemService.itemsByCostCode(Number(id));
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Fetch single item by ID' })
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
