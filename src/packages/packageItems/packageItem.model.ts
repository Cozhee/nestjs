import { Table, Column, Model, PrimaryKey, ForeignKey, AutoIncrement } from "sequelize-typescript";
import { Item } from "src/items/item.model";
import { Package } from "../package.model";

@Table
export class PackageItem extends Model<PackageItem> {
    @PrimaryKey
    @AutoIncrement
    @Column
    packageItemId: number

    @Column
    packageItemCost: number

    @Column
    packageItemQuantity: number

    @Column({ defaultValue: false })
    packageItemPrint: boolean

    @ForeignKey(() => Package)
    @Column
    packageId: number

    @ForeignKey(() => Item)
    @Column
    itemId: number

}