import { BelongsToManyGetAssociationsMixin } from 'sequelize';
import {
  Table,
  Column,
  Model,
  Unique,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
} from 'sequelize-typescript';
import { CostCode } from 'src/costCode/costCode.model';
import { DivisionItems } from 'src/division-items/division-items.model';
import { Division } from 'src/division/division.model';

@Table
export class Item extends Model<Item> {
  @Unique
  @Column
  name: string;

  @Column
  description: string;

  @Column
  standardCost: number;

  @Column({ defaultValue: false })
  itemStatus: boolean;

  @Column({ defaultValue: false })
  itemIsColor: boolean;

  @Column({ defaultValue: false })
  itemIsRetail: boolean;

  @ForeignKey(() => CostCode)
  @Column
  costCodeId: number;

  @BelongsTo(() => CostCode)
  costCode: CostCode;

  @BelongsToMany(() => Division, () => DivisionItems)
  divisions: Division[];
}
