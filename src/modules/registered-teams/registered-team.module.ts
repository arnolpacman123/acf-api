import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisteredTeamEntity } from '@registered-teams/models/entities/registered-team.entity';
import { RegisteredTeamsController } from '@registered-teams/controllers/registered-teams.controller';
import { RegisteredTeamRepository } from '@registered-teams/models/repositories/registered-team.repository';
import { RegisteredTeamsService } from '@registered-teams/services/registered-teams.service';
import { ClubCategoryRepository } from '@clubs-categories/models/repositories/club-category.repository';
import { ChampionshipRepository } from '@championships/models/repositories/championship.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RegisteredTeamEntity])],
  controllers: [RegisteredTeamsController],
  providers: [
    RegisteredTeamRepository,
    ClubCategoryRepository,
    ChampionshipRepository,
    RegisteredTeamsService,
  ],
})
export class RegisteredTeamsModule {}
