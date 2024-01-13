import {
  Table,
  Column,
  Model,
  Unique,
  BelongsToMany,
} from 'sequelize-typescript';
import { DivisionItems } from 'src/division-items/division-items.model';
import { Item } from 'src/item/item.model';

@Table
export class Division extends Model<Division> {
  @Unique
  @Column
  location: string;

  @BelongsToMany(() => Item, () => DivisionItems)
  items: Item[];
}
