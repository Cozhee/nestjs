import { Body, Controller, Post, Get } from '@nestjs/common';
import { CostCodeService } from './costCode.service';
import { CostCode } from './costCode.model';
import { CostCodeDto } from './dto';

@Controller('cost-code')
export class CostCodeController {
  constructor(private costCodeService: CostCodeService) { }

  @Post()
  create(@Body() dto: CostCodeDto): Promise<CostCode> {
    return this.costCodeService.create(dto);
  }

  @Get()
  findAll(): Promise<CostCode[]> {
    return this.costCodeService.findAll();
  }
}
