import { Module } from '@nestjs/common';
import { RetailCategoryService } from './retailCategory.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({})
export class RetailCategoriesModule {
  providers: [RetailCategoryService];
}
