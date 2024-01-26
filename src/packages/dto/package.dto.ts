import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class PackageDto {
  @IsString()
  @ApiProperty({ type: String, description: 'packageName' })
  packageName: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ type: Boolean, description: 'packageIsActive' })
  packageIsActive: boolean;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ type: Boolean, description: 'packageCalcBaseFees' })
  packageCalcBaseFees: boolean;
}
