import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsersService } from "@users/services/users.service";
import { UserLoginDto } from "@users/models/dto/user-login.dto";
import { JwtAuthGuard } from "@guards/jwt-auth.guard";

@Controller('users')
export class UsersController {

  constructor(
    private readonly usersService: UsersService
  ) {
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Post('login')
  async login(
    @Body() userLoginDto: UserLoginDto,
  ) {
    return await this.usersService.login(userLoginDto);
  }

  @Get('seed')
  async seed() {
    return await this.usersService.seed();
  }

}
