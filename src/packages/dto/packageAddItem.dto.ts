import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class PackageAddItemDto {
  @IsNumber()
  @ApiProperty({ type: Number, description: 'itemId' })
  itemId: number;

  @IsNumber()
  @ApiProperty({ type: Number, description: 'packageId' })
  packageId: number;
}
