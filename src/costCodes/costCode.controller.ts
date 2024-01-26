import { Body, Controller, Post, Get, Param, Patch } from '@nestjs/common';
import { CostCodeService } from './costCode.service';
import { CostCode } from './costCode.model';
import { CostCodeDto } from './dto';

@Controller('cost-codes')
export class CostCodeController {
  constructor(private costCodeService: CostCodeService) {}

  @Post()
  create(@Body() dto: CostCodeDto): Promise<CostCode> {
    return this.costCodeService.create(dto);
  }

  @Get()
  findAll(): Promise<CostCode[]> {
    return this.costCodeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<CostCode> {
    return this.costCodeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: CostCodeDto): Promise<CostCode> {
    return this.costCodeService.update(+id, dto);
  }
}
