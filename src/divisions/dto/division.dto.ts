import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class DivisionDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'location' })
  location: string;
}
