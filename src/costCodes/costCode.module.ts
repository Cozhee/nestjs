import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CostCode } from './costCode.model';
import { CostCodeService } from './costCode.service';
import { CostCodeController } from './costCode.controller';

@Module({
  imports: [SequelizeModule.forFeature([CostCode])],
  providers: [CostCodeService],
  controllers: [CostCodeController],
})
export class CostCodeModule {}
