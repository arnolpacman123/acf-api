import { JwtAuthGuard } from '@core/guards/jwt-auth.guard';
import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { RegisteredTeamsService } from '@registered-teams/services/registered-teams.service';

@UseGuards(JwtAuthGuard)
@Controller('registered-teams')
export class RegisteredTeamsController {
  constructor(
    private readonly registeredTeamsService: RegisteredTeamsService,
  ) {}

  @Get()
  async findAll() {
    return await this.registeredTeamsService.findAll();
  }

  @Get('seed')
  async seed() {
    return await this.registeredTeamsService.seed();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.registeredTeamsService.findOne(+id);
  }
}
