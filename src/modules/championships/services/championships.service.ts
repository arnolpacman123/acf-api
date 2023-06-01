import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChampionshipEntity } from '@championships/models/entities/championship.entity';
import {
  ChampionshipCreateDto,
  ChampionshipUpdateDto,
} from '@championships/models/dto';
import { ChampionshipRepository } from '@championships/models/repositories/championship.repository';

@Injectable()
export class ChampionshipsService {
  constructor(
    @InjectRepository(ChampionshipEntity)
    private readonly championshipRepository: ChampionshipRepository,
  ) {}

  async findAll(): Promise<ChampionshipEntity[]> {
    const championships = await this.championshipRepository.find({
      order: {
        id: 'DESC',
      },
    });

    return championships.map((championship) => {
      const { registeredTeams, ...rest } = championship;

      return {
        ...rest,
        registeredTeams: registeredTeams.map((registeredTeam) => {
          const { clubCategory } = registeredTeam;
          return clubCategory;
        }),
      };
    });
  }

  async findOne(id: number) {
    const championship = await this.championshipRepository.findOne({
      where: {
        id,
      },
      relations: {
        registeredTeams: {
          clubCategory: {
            club: true,
            category: true,
          },
        },
      },
    });

    const { registeredTeams, ...rest } = championship;

    return {
      ...rest,
      registeredTeams: registeredTeams.map((registeredTeam) => {
        const { clubCategory } = registeredTeam;
        return clubCategory;
      }),
    };
  }

  async seed(): Promise<ChampionshipEntity[]> {
    const championships: ChampionshipEntity[] = [];
    for (let i = 0; i < 14; i++) {
      const championship: ChampionshipEntity = {
        name: `Campeonato ACF 20${10 + i}`,
        description: `Campeonato de fútbol de 20${10 + i}`,
        startDate: new Date(`20${10 + i}-01-01`),
      };
      championships.push(championship);
    }

    return await this.championshipRepository.save(championships);
  }

  async create(
    championshipCreateDto: ChampionshipCreateDto,
  ): Promise<ChampionshipEntity> {
    return await this.championshipRepository.save(championshipCreateDto);
  }

  async update(
    id: number,
    championshipUpdateDto: ChampionshipUpdateDto,
  ): Promise<ChampionshipEntity> {
    const championship: ChampionshipEntity =
      await this.championshipRepository.findOne({
        where: {
          id,
        },
      });
    championship.name = championshipUpdateDto.name;
    championship.description = championshipUpdateDto.description;
    championship.startDate = championshipUpdateDto.startDate;
    return await this.championshipRepository.save(championship);
  }
}
