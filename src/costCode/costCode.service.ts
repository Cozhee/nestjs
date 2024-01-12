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
}
