import {
  Table,
  Column,
  Model,
  Unique,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { CostCode } from 'src/costCode/costCode.model';

@Table
export class Item extends Model<Item> {
  @Unique
  @Column
  name: string;

  @Column
  description: string;

  @Column
  standardCost: number;

  @Column
  itemStatus: boolean;

  @Column
  itemIsColor: boolean;

  @Column
  itemIsRetail: boolean;

  @ForeignKey(() => CostCode)
  @Column
  costCodeId: number;

  @BelongsTo(() => CostCode)
  team: CostCode;
}
