import { Table, Column, Model, Unique, HasMany } from 'sequelize-typescript';
import { Item } from 'src/item/item.model';

@Table
export class CostCode extends Model<CostCode> {
  @Unique
  @Column
  costCodeDesc: string;

  @HasMany(() => Item)
  items: Item[];
}
