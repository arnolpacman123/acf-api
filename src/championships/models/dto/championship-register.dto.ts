import { IsDate, IsDateString, IsNotEmpty, IsString } from "class-validator";

export class ChampionshipRegisterDto {
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