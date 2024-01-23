import { Module } from "@nestjs/common";
import { DivisionController } from "./division.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Division } from "./division.model";
import { DivisionService } from "./division.service";

@Module({
    imports: [SequelizeModule.forFeature([Division])],
    providers: [DivisionService],
    controllers: [DivisionController],
})
export class DivisionModule { }