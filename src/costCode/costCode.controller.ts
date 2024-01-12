import { Body, Controller, Post, Get } from '@nestjs/common';
import { CostCodeService } from './costCode.service';
import { CostCode } from './costCode.model';

@Controller('cost-code')
export class CostCodeController {
  constructor(private costCodeService: CostCodeService) {}

  @Post()
  create(@Body() itemData): Promise<CostCode> {
    return this.costCodeService.create(itemData);
  }

  @Get()
  findAll(): Promise<CostCode[]> {
    return this.costCodeService.findAll();
  }
}
