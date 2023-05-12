import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserLoginDto } from "@users/models/dto/user-login.dto";
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";
import { LoginResponse } from "@users/models/interfaces/login-response.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "@users/models/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
        private readonly jwtService: JwtService,
    ) {
    }

    async login(userLoginDto: UserLoginDto): Promise<LoginResponse> {
        const { ci, password } = userLoginDto;

        const user = await this.userRepository.findOne({
            where: {
                ci,
            },
        });
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

    async seed(): Promise<UserEntity[]> {
        const password1 = await bcrypt.hash("12345678", 10);
        const password2 = await bcrypt.hash("12345678", 10);

        const users: UserEntity[] = [
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

        return await this.userRepository.save(users);
    }

    async findAll(): Promise<UserEntity[]> {
        return this.userRepository.find();
    }

    async findOneById(id: number): Promise<UserEntity> {
        return this.userRepository.findOne({ where: { id } });
    }


    passwordsMatch(userPassword: string, userPayloadPassword: string) {
        return userPassword === userPayloadPassword;
    }
}
