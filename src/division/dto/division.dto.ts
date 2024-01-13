import { IsNotEmpty, IsString } from 'class-validator';

export class DivisionDto {
  @IsString()
  @IsNotEmpty()
  location: string;
}
