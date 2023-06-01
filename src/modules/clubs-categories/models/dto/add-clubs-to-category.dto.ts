import { IsNotEmpty, IsString } from "class-validator";

export class AddClubsToCategoryDto {
    @IsString({ each: true })
    @IsNotEmpty({ each: true })
    @IsNotEmpty()
    clubsNames: string[];
    
    @IsString()
    @IsNotEmpty()
    categoryName: string;
}