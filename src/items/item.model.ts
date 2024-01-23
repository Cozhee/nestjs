import {
  Table,
  Column,
  Model,
  Unique,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
} from 'sequelize-typescript';
import { CostCode } from 'src/costCodes/costCode.model';
import { Division } from 'src/divisions/division.model';
import { ItemDivision } from './itemDivisions/itemDivision.model';
import { Package } from 'src/packages/package.model';
import { PackageItem } from 'src/packages/packageItems/packageItem.model';

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

  @BelongsToMany(() => Division, () => ItemDivision)
  divisions: Division[];

  @BelongsToMany(() => Package, () => PackageItem)
  packageItems: Package[]
}
