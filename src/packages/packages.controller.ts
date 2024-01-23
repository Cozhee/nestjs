import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PackagesService } from './packages.service';
import { Item } from 'src/items/item.model';

@Controller('packages')
export class PackagesController {
  constructor(private readonly packagesService: PackagesService) { }

  @Post()
  create(@Body() data: {}): Promise<{}> {
    return this.packagesService.create(data)
  }

  @Post('test')
  async addItem(@Body() data: {}) {
    return this.packagesService.addItem(data)
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.packagesService.findOne(id)
  }
}
