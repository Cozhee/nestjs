import {
  Table,
  Column,
  Model,
  Unique,
  BelongsToMany,
} from 'sequelize-typescript';
import { ItemDivision } from 'src/items/itemDivisions/itemDivision.model';
import { Item } from 'src/items/item.model';

@Table
export class Division extends Model<Division> {
  @Unique
  @Column
  location: string;

  @BelongsToMany(() => Item, () => ItemDivision)
  items: Item[];
}
