import { IsNotEmpty, IsString } from "class-validator";

export class UserLoginDto {
    @IsNotEmpty()
    @IsString()
    ci: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}