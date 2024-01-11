import { Module } from '@nestjs/common';
import { SequelizeService } from './sequelize.service';

@Module({})
export class SequelizeModule {
  providers: [SequelizeService];
  exports: [SequelizeService];
}
