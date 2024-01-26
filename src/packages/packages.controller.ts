import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PackagesService } from './packages.service';
import { PackageDto } from './dto';
import { ApiBody } from '@nestjs/swagger';
import { PackageAddItemDto } from './dto/packageAddItem.dto';

@Controller('packages')
export class PackagesController {
  constructor(private readonly packagesService: PackagesService) {}

  @Post()
  create(@Body() dto: PackageDto): Promise<{}> {
    return this.packagesService.create(dto);
  }

  @Post('add-item/')
  @ApiBody({ type: PackageAddItemDto })
  addItem(@Body() dto: PackageAddItemDto) {
    return this.packagesService.addItem(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.packagesService.findOne(id);
  }

  @Get()
  findAll() {
    return this.packagesService.findAll();
  }
}
