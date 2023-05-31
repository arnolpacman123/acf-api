import { IsDateString, IsNotEmpty, IsString } from "class-validator";

export class ChampionshipCreateDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsDateString()
    startDate: Date;
}