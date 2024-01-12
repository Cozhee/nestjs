import { Body, Controller, Post } from "@nestjs/common";
import { DivisionService } from "./division.service";
import { Division } from "./division.model";

@Controller('division')
export class DivisionController {
    constructor(private divisionService: DivisionService) { }
    @Post()
    create(@Body() itemData): Promise<Division> {
        return this.divisionService.create(itemData)
    }
}