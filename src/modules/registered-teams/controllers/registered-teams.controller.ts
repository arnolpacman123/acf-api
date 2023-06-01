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

  @Get('club/:clubName/championship/:championshipId')
  async findAllByClubNameAndChampionshipId(
    @Param('clubName') clubName: string,
    @Param('championshipId') championshipId: number,
  ) {
    return await this.registeredTeamsService.findAllByClubNameAndChampionshipId(
      clubName,
      +championshipId,
    );
  }

  @Get('category/:categoryName/championship/:championshipId')
  async findAllByCategoryNameAndChampionshipId(
    @Param('categoryName') categoryName: string,
    @Param('championshipId') championshipId: number,
  ) {
    return await this.registeredTeamsService.findAllByCategoryNameAndChampionshipId(
      categoryName,
      +championshipId,
    );
  }

  @Get('seed')
  async seed() {
    return await this.registeredTeamsService.seed();
  }
}
