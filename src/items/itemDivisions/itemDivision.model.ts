import {
    Table,
    Column,
    Model,
    ForeignKey,
} from 'sequelize-typescript';
import { Division } from 'src/divisions/division.model';
import { Item } from '../item.model';

@Table
export class ItemDivision extends Model<ItemDivision> {
    @ForeignKey(() => Division)
    @Column
    divisionId: number

    @ForeignKey(() => Item)
    @Column
    itemId: number;
}
