import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ItemDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    description: string

    @IsNumber()
    standardCost: number

    @IsBoolean()
    itemStatus: boolean

    @IsBoolean()
    itemIsColor: boolean

}