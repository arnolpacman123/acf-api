import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChampionshipEntity } from '@championships/models/entities/championship.entity';
import { Repository } from 'typeorm';
import {
  ChampionshipCreateDto,
  ChampionshipUpdateDto,
} from '@championships/models/dto';

@Injectable()
export class ChampionshipsService {
  constructor(
    @InjectRepository(ChampionshipEntity)
    private readonly championshipRepository: Repository<ChampionshipEntity>,
  ) {}

  async findAll(): Promise<ChampionshipEntity[]> {
    return await this.championshipRepository.find({
      order: {
        id: 'DESC',
      },
    });
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

  async update(id: number, championshipUpdateDto: ChampionshipUpdateDto) {
    return await this.championshipRepository.update(id, championshipUpdateDto);
  }

  async findOne(id: number) {
    return await this.championshipRepository.findOne({
      where: {
        id,
      },
    });
  }
}
