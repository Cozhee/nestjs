import { Body, Controller, Post, Get, Param, Patch } from '@nestjs/common';
import { DivisionService } from './division.service';
import { Division } from './division.model';
import { DivisionDto } from './dto';

@Controller('division')
export class DivisionController {
  constructor(private divisionService: DivisionService) {}
  @Post()
  create(@Body() dto: DivisionDto): Promise<Division> {
    return this.divisionService.create(dto);
  }

  @Get()
  findAll() {
    return this.divisionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Division> {
    return this.divisionService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: DivisionDto): Promise<Division> {
    return this.divisionService.update(+id, dto);
  }
}
