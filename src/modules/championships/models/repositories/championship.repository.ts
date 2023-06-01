import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ChampionshipEntity } from '@championships/models/entities/championship.entity';

@Injectable()
export class ChampionshipRepository extends Repository<ChampionshipEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(ChampionshipEntity, dataSource.createEntityManager());
  }
}
