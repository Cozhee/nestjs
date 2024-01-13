import { Injectable } from '@nestjs/common';
import { CreateDivisionItemDto } from './dto/create-division-item.dto';
import { UpdateDivisionItemDto } from './dto/update-division-item.dto';
import { Item } from 'src/item/item.model';
import { Division } from 'src/division/division.model';
import { CostCode } from 'src/costCode/costCode.model';

@Injectable()
export class DivisionItemsService {
  async create(createDivisionItemDto: CreateDivisionItemDto) {
    const item = await Item.findOne({ where: { name: 'item2' } });
    const divisions = await Division.findAll();
    console.log(item);
  }

  async findAll() {
    const item = await Item.findAll();
    const costCode = await CostCode.findOne({ where: { id: 1 } });
    return costCode.$get('items');
  }

  findOne(id: number) {
    return `This action returns a #${id} divisionItem`;
  }

  update(id: number, updateDivisionItemDto: UpdateDivisionItemDto) {
    return `This action updates a #${id} divisionItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} divisionItem`;
  }
}
