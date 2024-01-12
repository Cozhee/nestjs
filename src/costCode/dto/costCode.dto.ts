import { IsString } from "class-validator";

export class CostCodeDto {
    @IsString()
    costCodeDesc: string
}