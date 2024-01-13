import { Module } from '@nestjs/common';
import { ItemModule } from './item/item.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { CostCodeModule } from './costCode/costCode.module';
import { DivisionModule } from './division/division.module';
import { DivisionItemsModule } from './division-items/division-items.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CostCodeModule,
    DivisionModule,
    ItemModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadModels: true,
      synchronize: true,
    }),
    DivisionItemsModule,
  ],
})
export class AppModule { }
