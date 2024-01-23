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
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsNumber()
  @IsOptional()
  standardCost: number;

  @IsBoolean()
  @IsOptional()
  itemStatus: boolean;

  @IsBoolean()
  @IsOptional()
  itemIsColor: boolean;

  @IsNumber()
  @IsOptional()
  costCodeId: number;
}
