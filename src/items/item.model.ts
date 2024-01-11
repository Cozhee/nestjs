import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Item extends Model<Item> {
  @Column
  name: string;

  @Column
  description: string;

  @Column
  standardCost: number;

  @Column
  itemStatus: boolean;
}
