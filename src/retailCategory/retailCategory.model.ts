import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class RetailCategory extends Model<RetailCategory> {
  @Column
  categoryDesc: string;
}
