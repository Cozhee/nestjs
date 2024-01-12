import { Table, Column, Model, Unique } from 'sequelize-typescript'

@Table
export class Division extends Model<Division> {
    @Unique
    @Column
    location: string
}