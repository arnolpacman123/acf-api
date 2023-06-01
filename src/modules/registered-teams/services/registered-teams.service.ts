import { ChampionshipRepository } from '@championships/models/repositories/championship.repository';
import { ClubCategoryRepository } from '@clubs-categories/models/repositories/club-category.repository';
import { Injectable } from '@nestjs/common';
import { RegisteredTeamEntity } from '@registered-teams/models/entities/registered-team.entity';
import { RegisteredTeamRepository } from '@registered-teams/models/repositories/registered-team.repository';

@Injectable()
export class RegisteredTeamsService {
  constructor(
    private readonly registeredTeamRepository: RegisteredTeamRepository,
    private readonly ClubCategoryRepository: ClubCategoryRepository,
    private readonly championshipRepository: ChampionshipRepository,
  ) {}

  async findAll(): Promise<RegisteredTeamEntity[]> {
    const registeredTeams = await this.registeredTeamRepository.find({
      relations: {
        championship: true,
        clubCategory: {
          category: true,
          club: true,
        },
      },
    });

    return registeredTeams.map((registeredTeam) => {
      const { championship, clubCategory } = registeredTeam;
      return {
        championship,
        team: clubCategory,
      };
    });
  }

  async seed() {
    const clubCategories = await this.ClubCategoryRepository.find();
    const championships = await this.championshipRepository.find();

    const registeredTeams: RegisteredTeamEntity[] = [];

    for (const championship of championships) {
      for (const clubCategory of clubCategories) {
        const registeredTeam = new RegisteredTeamEntity();
        registeredTeam.championship = championship;
        registeredTeam.clubCategory = clubCategory;

        registeredTeams.push(registeredTeam);
      }
    }

    return await this.registeredTeamRepository.save(registeredTeams);
    
  }
}
