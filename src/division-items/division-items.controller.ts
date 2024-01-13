import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DivisionItemsService } from './division-items.service';
import { CreateDivisionItemDto } from './dto/create-division-item.dto';
import { UpdateDivisionItemDto } from './dto/update-division-item.dto';

@Controller('division-items')
export class DivisionItemsController {
  constructor(private readonly divisionItemsService: DivisionItemsService) {}

  @Post()
  create(@Body() createDivisionItemDto: CreateDivisionItemDto) {
    return this.divisionItemsService.create(createDivisionItemDto);
  }

  @Get('item')
  findAll() {
    return this.divisionItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.divisionItemsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDivisionItemDto: UpdateDivisionItemDto,
  ) {
    return this.divisionItemsService.update(+id, updateDivisionItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.divisionItemsService.remove(+id);
  }
}
