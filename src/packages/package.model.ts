import { AutoIncrement, BelongsToMany, Model, PrimaryKey } from "sequelize-typescript";
import { Table, Column } from "sequelize-typescript";
import { Item } from "src/items/item.model";
import { PackageItem } from "./packageItems/packageItem.model";

@Table
export class Package extends Model<Package> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number

    @Column
    packageName: string

    @Column({ defaultValue: false })
    packageIsActive: boolean

    @Column({ defaultValue: false })
    packageCalcBaseFees: boolean

    @BelongsToMany(() => Item, () => PackageItem)
    packageItems: []
}