import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CostCode } from './costCode.model';

@Injectable()
export class CostCodeService {
  constructor(@InjectModel(CostCode) private itemModel: typeof CostCode) {}

  async create(itemData): Promise<CostCode> {
    const costCode = new CostCode(itemData);
    return await costCode.save();
  }

  async findAll(): Promise<CostCode[]> {
    return this.itemModel.findAll();
  }

  async findOne(id: number): Promise<CostCode> {
    return this.itemModel.findOne({ where: { id } });
  }

  async update(id: number, data: {}): Promise<CostCode> {
    const item = await this.itemModel.findOne({ where: { id } });
    console.log(item);
    await item.update(data);
    await item.save();
    return item;
  }
}
