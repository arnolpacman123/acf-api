import { Controller, Get, UseGuards } from '@nestjs/common';
import { ClubsService } from "@clubs/services/clubs.service";
import { JwtAuthGuard } from "@guards/jwt-auth.guard";

@UseGuards(JwtAuthGuard)
@Controller('clubs')
export class ClubsController {

  constructor(
    private readonly clubsService: ClubsService,
  ) {
  }

  @Get()
  async findAll() {
    return await this.clubsService.findAll();
  }

  @Get('seed')
  async seed() {
    return await this.clubsService.seed();
  }

}
