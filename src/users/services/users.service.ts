import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "@users/models/schemas/user.schema";
import { Model } from "mongoose";
import { UserLoginDto } from "@users/models/dto/user-login.dto";
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";
import { LoginResponse } from "@users/models/interfaces/login-response.interface";

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User.name)
        private readonly userModel: Model<UserDocument>,
        private readonly jwtService: JwtService,
    ) {
    }

    async login(userLoginDto: UserLoginDto): Promise<LoginResponse> {
        const { ci, password } = userLoginDto;

        const user = await this.userModel.findOne({ ci });
        if (!user) {
            throw new HttpException({
                message: 'Invalid credentials',
                errors: {
                    incorrect_field: 'ci',
                },
            }, HttpStatus.NOT_FOUND);
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new HttpException({
                message: 'Invalid credentials',
                errors: {
                    incorrect_field: 'password',
                },
            }, HttpStatus.UNAUTHORIZED);
        }

        const accessToken = this.jwtService.sign({ user });

        return {
            token_type: 'jwt',
            access_token: accessToken,
        };
    }

    async seed(): Promise<User[]> {
        const password1 = await bcrypt.hash("12345678", 10);
        const password2 = await bcrypt.hash("12345678", 10);

        const users: User[] = [
            {
                ci: "3289047",
                password: password1,
                name: "José",
                lastname: "Franco",
            },
            {
                ci: "7639770",
                password: password2,
                name: "Pedro",
                lastname: "Barbery",
            },
        ];

        return this.userModel.insertMany(users);
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find({}).exec();
    }

    async findOneById(id: string): Promise<User> {
        return this.userModel.findById({ _id: id }).exec();
    }


    passwordsMatch(userPassword: string, userPayloadPassword: string) {
        return userPassword === userPayloadPassword;
    }
}
