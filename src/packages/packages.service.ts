import { Injectable } from '@nestjs/common';
import { Package } from './package.model';
import { InjectModel } from '@nestjs/sequelize';
import { Item } from 'src/items/item.model';

@Injectable()
export class PackagesService {
    constructor(@InjectModel(Package) private itemModel: typeof Package) { }

    async create(data: {}) {
        return this.itemModel.create(data)
    }

    async addItem(data) {
        const item = await Item.findOne({ where: { id: 1 } })
        const pckage = await this.itemModel.findOne({ where: { id: 1 } })

        const result = pckage.$add('packageItems', item)
        return result
    }

    async findOne(id: number) {
        return await this.itemModel.findOne({
            where: { id },
            include: [{
                model: Item,
                through: {
                }
            }],
        })
    }
}