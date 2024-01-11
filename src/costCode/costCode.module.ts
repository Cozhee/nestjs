import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CostCode } from './costCode.model';
import { CostCodeService } from './costCode.service';

@Module({
  imports: [SequelizeModule.forFeature([CostCode])],
  providers: [CostCodeService],
})
export class CostCodeModule {}
