import { PartialType } from '@nestjs/mapped-types';
import { CreateDivisionItemDto } from './create-division-item.dto';

export class UpdateDivisionItemDto extends PartialType(CreateDivisionItemDto) {}
