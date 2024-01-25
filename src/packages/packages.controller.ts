import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PackagesService } from './packages.service';

@Controller('packages')
export class PackagesController {
  constructor(private readonly packagesService: PackagesService) {}

  @Post()
  create(@Body() data: {}): Promise<{}> {
    return this.packagesService.create(data);
  }

  @Post('add-item/:id')
  addItem(@Param('id') id: number, @Body() data: {}) {
    return this.packagesService.addItem(id, data);
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
