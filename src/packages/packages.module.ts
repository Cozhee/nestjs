import { Module } from '@nestjs/common';
import { PackagesService } from './packages.service';
import { PackagesController } from './packages.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Package } from './package.model';
import { PackageItem } from './packageItems/packageItem.model';

@Module({
  imports: [SequelizeModule.forFeature([Package, PackageItem])],
  controllers: [PackagesController],
  providers: [PackagesService],
})
export class PackagesModule { }
