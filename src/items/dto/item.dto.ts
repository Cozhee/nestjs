import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class ItemDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'name' })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: String, description: 'description ' })
  description: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ type: Number, description: 'standardCost' })
  standardCost: number;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ type: Boolean, description: 'itemStatus' })
  itemStatus: boolean;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ type: Boolean, description: 'itemIsColor' })
  itemIsColor: boolean;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ type: Number, description: 'costCodeId' })
  costCodeId: number;
}
