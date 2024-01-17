import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Division } from './division.model';

@Injectable()
export class DivisionService {
  constructor(@InjectModel(Division) private itemModel: typeof Division) {}

  async create(itemData: {}): Promise<Division> {
    const division = new Division(itemData);
    return await division.save();
  }

  async findAll(): Promise<Division[]> {
    return this.itemModel.findAll();
  }

  async findOne(id: number): Promise<Division> {
    return this.itemModel.findOne({ where: { id: id } });
  }

  async update(id: number, data: {}): Promise<Division> {
    const item = await this.itemModel.findOne({ where: { id } });
    await item.update(data);
    await item.save();
    return item;
  }
}
