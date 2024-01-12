import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Division } from "./division.model";

@Injectable()
export class DivisionService {
    constructor(@InjectModel(Division) private itemModel: typeof Division) { }

    async create(itemData) {
        const division = new Division(itemData)
        return await division.save()
    }
}