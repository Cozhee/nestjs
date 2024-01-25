import {
  Table,
  Column,
  Model,
  ForeignKey,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import { Division } from 'src/divisions/division.model';
import { Item } from '../item.model';

@Table
export class ItemDivision extends Model<ItemDivision> {
  @PrimaryKey
  @AutoIncrement
  @Column
  itemDivisionId: number;

  @Column
  itemDivisionCost: number;

  @ForeignKey(() => Division)
  @Column
  divisionId: number;

  @ForeignKey(() => Item)
  @Column
  itemId: number;
}
