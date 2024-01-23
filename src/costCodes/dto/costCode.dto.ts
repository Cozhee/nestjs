import { IsNotEmpty, IsString } from 'class-validator';

export class CostCodeDto {
  @IsString()
  @IsNotEmpty()
  costCodeDesc: string;
}
