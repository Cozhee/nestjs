import { Body, Controller, Post } from '@nestjs/common';
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
}
