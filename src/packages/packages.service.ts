import { Injectable } from '@nestjs/common';
import { Package } from './package.model';
import { InjectModel } from '@nestjs/sequelize';
import { Item } from 'src/items/item.model';

@Injectable()
export class PackagesService {
  constructor(@InjectModel(Package) private itemModel: typeof Package) {}

  async create(data: {}) {
    return this.itemModel.create(data);
  }

  async addItem(data) {
    const itemId = data.itemId;
    const packageId = data.packageId;
    const item = await Item.findOne({ where: { id: itemId } });
    const pckage = await this.itemModel.findOne({
      where: { id: packageId },
    });

    const result = await pckage.$add('packageItems', item);
    return 'added';
  }

  async findOne(id: number) {
    return await this.itemModel.findOne({
      where: { id },
      include: [
        {
          model: Item,
          through: {},
        },
      ],
    });
  }

  async findAll() {
    return await this.itemModel.findAll();
  }
}
