import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Club } from "@clubs/models/schemas/club.schema";

export class OrganizationRegisterDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsArray({
        each: true,
    })
    clubs?: Club[];
}