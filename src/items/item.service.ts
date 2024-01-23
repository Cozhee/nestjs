import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Item } from './item.model';
import { Division } from 'src/divisions/division.model';

@Injectable()
export class ItemService {
  constructor(@InjectModel(Item) private itemModel: typeof Item) { }

  async create(itemData: {}): Promise<Item> {
    const item = new Item(itemData);
    return await item.save();
  }

  async findAll(): Promise<Item[]> {
    return this.itemModel.findAll({
      include: [{
        model: Division,
        through: {
          attributes: []
        }
      }],
    });
  }

  async findOne(id: number): Promise<Item> {
    return this.itemModel.findOne({ where: { id } });
  }

  async update(id: number, data: {}): Promise<Item> {
    const item = await Item.findOne({ where: { id: id } });
    await item.update(data);
    await item.save();
    return item;
  }

  async remove(id: number): Promise<number> {
    return this.itemModel.destroy({ where: { id } });
  }

  async itemsByCostCode(id: number) {
    return this.itemModel.findAll({ where: { costCodeId: id } });
  }

  async addTest() {
    const item = await this.itemModel.findOne({ where: { id: 1 } })
    const division = await Division.findOne({ where: { id: 3 } })

    const result = await item.$add('divisions', division)
  }
}
