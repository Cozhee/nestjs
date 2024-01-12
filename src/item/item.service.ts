import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Item } from './item.model';

@Injectable()
export class ItemService {
  constructor(@InjectModel(Item) private readonly itemModel: typeof Item) {}

  async create(itemData): Promise<Item> {
    const item = new Item(itemData);
    return await item.save();
  }

  async findAll(): Promise<Item[]> {
    return this.itemModel.findAll();
  }

  async findOne(id: number): Promise<Item> {
    return this.itemModel.findOne({ where: { id } });
  }

  async update(id: number, itemData): Promise<[number, Item[]]> {
    const [affectedCount, affectedRows] = await this.itemModel.update(
      itemData,
      {
        where: { id },
        returning: true,
      },
    );
    return [affectedCount, affectedRows as Item[]];
  }

  async remove(id: number): Promise<number> {
    return this.itemModel.destroy({ where: { id } });
  }

  async itemsByCostCode(id: number) {
    return this.itemModel.findAll({ where: { costCodeId: id } });
  }
}
