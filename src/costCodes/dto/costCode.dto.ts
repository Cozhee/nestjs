import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CostCodeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'costCodeDesc' })
  costCodeDesc: string;
}
