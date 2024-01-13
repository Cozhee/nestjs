import {
  Table,
  Column,
  Model,
  ForeignKey,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import { Division } from 'src/division/division.model';
import { Item } from 'src/item/item.model';

@Table
export class DivisionItems extends Model<DivisionItems> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @ForeignKey(() => Division)
  @Column
  divisionId: number;

  @ForeignKey(() => Item)
  @Column
  itemId: number;
}
