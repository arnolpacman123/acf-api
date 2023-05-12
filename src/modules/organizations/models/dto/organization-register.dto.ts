import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class OrganizationRegisterDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsNumber(
        {},
        { each: true },
    )
    clubsIds?: number[];
}